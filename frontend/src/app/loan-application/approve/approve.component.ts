import { Component } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-approve-loan-application',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveLoanApplicationComponent {
  constructor(private loanService: LoanService) {}

  // Method to approve a loan application
  approveApplication(applicationId: string) {
    this.loanService.approveLoanApplication(applicationId).subscribe(
      response => {
        console.log('Application approved:', response);
      },
      error => {
        console.error('Error approving application', error);
      }
    );
  }
}
