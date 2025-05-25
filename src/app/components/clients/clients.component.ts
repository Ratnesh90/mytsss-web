import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface ClientIcon {
  icon: SafeHtml;
  name: string;
}

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent {
  clientIcons: ClientIcon[] = [];

  clientBuildings: string[] = [
    'https://pixabay.com/get/g66adaf2e60b4a6c97ec34c3bd7c2b9aaffc86dcb3a70def42bde5a0a95b2d2fde58c25c8e92380ec7f8bcec7db1fbad5_1280.jpg',
    'https://pixabay.com/get/g6bd77cd77f1ca59e539eb21ada34eaf8e08ab4e88b8a49f49f2a7fbe0f30ff0397df1d17d1a21d16dcae8bc07a0a83eb5fac5cc7e16f5991c5b16d7ed12f7e62_1280.jpg',
    'https://pixabay.com/get/gf76b9f4c55dd7e9764d74c59b83d7969dc78df09ca02c0a87a9e6fe6d8eb1ec4ecf2d35d6e4f6972f02f7c9e8afb6ed9_1280.jpg',
  ];

  testimonials: Testimonial[] = [
    {
      quote: "Mytsss Security has been instrumental in enhancing our security infrastructure. Their team's expertise and professionalism are truly outstanding.",
      name: "Rajesh Kumar",
      position: "Operations Director",
      company: "Haldiram's"
    },
    {
      quote: "The network infrastructure installed by Mytsss has significantly improved our connectivity and system reliability. Highly recommended for enterprise solutions.",
      name: "Priya Singh",
      position: "IT Manager",
      company: "HCL Technologies"
    },
    {
      quote: "Their biometric access control system has revolutionized how we manage security at our hospital. Patient data has never been more secure.",
      name: "Dr. Amit Tyagi",
      position: "Administrative Head",
      company: "SJM Hospital"
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    const rawIcons = [
      { text: 'Haldiram' },
      { text: 'HCL' },
      { text: 'SJM Hospital' },
      { text: 'Skoda' },
      { text: 'Icekool' },
      { text: 'Kent' },
      { text: 'Xero Degree' },
    ];

    this.clientIcons = rawIcons.map(icon => ({
      name: icon.text,
      icon: this.sanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 200 40" fill="currentColor">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="30">${icon.text}</text>
        </svg>
      `)
    }));
  }
}
