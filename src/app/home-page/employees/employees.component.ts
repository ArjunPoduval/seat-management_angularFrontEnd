import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployeeDTO } from 'src/api/models';
import { DepartmentService, EmployeeService } from 'src/api/services';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];

  public form: any;
  public departmentList: {
    departmentId: number;
    departmentName: string;
  }[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly departmentService: DepartmentService,
    private readonly employeeService: EmployeeService,
    private readonly notificationService :  NotificationService
  ) {
    var subscription1 = this.departmentService
      .getApiDepartment()
      .subscribe((value) => (this.departmentList = value || []));
    this.subscriptions.push(subscription1);
    this.generateForm();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private generateForm() {
    this.form = this.formBuilder.group({
      employeeName: '',
      departmentId: null,
    });
  }
  createEmployee() {
    const data = this.form.value;
    const request: EmployeeDTO = {
      employeeName: data.employeeName,
      departmentId: data.departmentId,
    };
    var subscription2 = this.employeeService
      .postApiEmployee(request)
      .subscribe({
        next: () => {
          this.notificationService.showSuccess("New employee created","success");
          //window.alert('Success');
        },
        error: (errorDetails) => {
          this.notificationService.showError(
            errorDetails?.error.Message,
            'Error'
          );
          //window.alert(errorDetails?.error.Message);
        },
      });
    this.subscriptions.push(subscription2);
    this.generateForm();
  }
}
