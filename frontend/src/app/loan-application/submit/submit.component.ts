import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-submit-loan-application',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitLoanApplicationComponent {
  loanForm: FormGroup;

  constructor(private fb: FormBuilder, private loanService: LoanService) {
    // Initialize the form with validation rules
    this.loanForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1000)]],
      term: ['', Validators.required],
      purpose: ['', Validators.required]
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.loanForm.valid) {
      // Call the service to submit the loan application
      this.loanService.submitLoanApplication(this.loanForm.value).subscribe(
        response => {
          console.log('Loan application submitted successfully', response);
        },
        error => {
          console.error('Error submitting loan application', error);
        }
      );
    }
  }
}
