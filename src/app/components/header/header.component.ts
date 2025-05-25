import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  isScrolled = false;
  mobileMenuOpen = false;
  mobileDropdowns: { [key: string]: boolean } = {};

  showContactPopup = false;

  contactForm: FormGroup;
  submitted = false;
  submitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;


  constructor(private eRef: ElementRef, private renderer: Renderer2,private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
    // Close menu on outside click
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.eRef.nativeElement.contains(e.target)) {
        this.mobileMenuOpen = false;
        this.mobileDropdowns = {};
      }
    });
  }

  navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/service-details',
      children: [
        { name: 'CCTV-Installation', path: '/cctv-installation' },
        { name: 'CCCTV-AMC', path: '/cctv-amc' },
        { name: 'Biometric', path: 'biometric' },
        { name: 'Network', path: '/network' },
      ],
    },
    { name: 'Industries', path: '/industries' },
    { name: 'Experience', path: '/timeline' },
    { name: 'Contact', path: '/contact' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = window.scrollY > 20;
    if (scrolled !== this.isScrolled) {
      this.isScrolled = scrolled;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.mobileDropdowns = {};
  }

  toggleDropdown(itemName: string) {
    this.mobileDropdowns[itemName] = !this.mobileDropdowns[itemName];
  }

  //pop-upcode 

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) return;

    this.submitting = true;
    const formData = this.contactForm.value;

    emailjs
      .send(
        'service_74eo1nd',
        'template_ymqnwnt',
        {
          name: formData.name,
          
          email: formData.email,
          phone:formData.phone,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        'REktWD8irmFBI4oi6'
      )
      .then(() => {
        this.submitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        this.submitted = false;

        setTimeout(() => {
          this.showSuccessMessage = false;
          this.showContactPopup = false;
        }, 4000);
      })
      .catch(() => {
        this.submitting = false;
        this.showErrorMessage = true;

        setTimeout(() => {
          this.showErrorMessage = false;
        }, 4000);
      });
  }

  //mobilenumber validation 

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
