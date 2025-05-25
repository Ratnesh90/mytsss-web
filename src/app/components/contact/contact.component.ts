import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import emailjs from '@emailjs/browser';

interface ContactInfo {
  icon: string;
  title: string;
  details: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  submitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  contactInfo: ContactInfo[] = [
    {
      icon: '<svg ...>...</svg>',
      title: 'Phone',
      details: '+91-95550 36661'
    },
    {
      icon: '<svg ...>...</svg>',
      title: 'Email',
      details: 'info@mytsss.com'
    },
    {
      icon: '<svg ...>...</svg>',
      title: 'Office Address',
      details: 'CO,105,Office No-8, IInd Floor, near Baba Arcade Market, Harola, Sector 5, Noida ,Uttar Pradesh 201301'
    },
    {
      icon: '<svg ...>...</svg>',
      title: 'Working Hours',
      details: 'Monday - Saturday: 8AM - 6PM<br />Weekend: By appointment'
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.submitting = true;
    this.showSuccessMessage = false;
    this.showErrorMessage = false;

    const formValue = this.contactForm.value;

    const templateParams = {
      name: formValue.name,
      email: formValue.email,
      phone: formValue.phone || 'N/A',
      subject: formValue.subject,
      message: formValue.message,
      time: new Date().toLocaleString()
    };

    emailjs.send(
      'service_74eo1nd',    // ✅ Replace with your MailJS service ID
      'template_ymqnwnt',   // ✅ Replace with your MailJS template ID
      templateParams,
      'REktWD8irmFBI4oi6'     // ✅ Replace with your MailJS public key
    )
    .then(() => {
      this.submitting = false;
      this.showSuccessMessage = true;
      this.contactForm.reset();
      this.submitted = false;
      setTimeout(() => this.showSuccessMessage = false, 5000);
    })
    .catch(() => {
      this.submitting = false;
      this.showErrorMessage = true;
      setTimeout(() => this.showErrorMessage = false, 5000);
    });
  }

  //phone number validation 
  enforcePhoneLimit(event: Event): void {
    const input = event.target as HTMLInputElement;
    // Keep only digits
    let cleaned = input.value.replace(/\D/g, '');
  
    // Limit to 10 digits max
    if (cleaned.length > 10) {
      cleaned = cleaned.slice(0, 10);
    }
  
    // Update input and form control value
    input.value = cleaned;
    this.contactForm.get('phone')?.setValue(cleaned);
  }
}
