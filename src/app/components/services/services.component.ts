import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  imageSrc?: string;
}

@Component({
  selector: 'app-services',
   standalone: true,
    imports: [CommonModule, HttpClientModule],
  template: `
    <section id="services" class="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg mb-4 text-slate-900 dark:text-white">Our Security <span class="text-primary">Services</span></h2>
          <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional security and network solutions tailored to your unique business requirements
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services" class="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
            <div *ngIf="service.imageSrc" class="h-48 overflow-hidden">
              <img [src]="service.imageSrc" [alt]="service.title" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
              <div class="mb-4">
                <div class="bg-primary/10 p-3 inline-block rounded-md">
                  <span [innerHTML]="service.icon"></span>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">{{ service.title }}</h3>
              <p class="text-slate-600 dark:text-slate-400">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
      title: 'CCTV Camera Installation',
      description: 'High-quality security camera installation with remote monitoring capabilities for businesses of all sizes.',
      imageSrc: "assets/image/cctv_installation1.jpg"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
      title: 'Network Infrastructure',
      description: 'Complete network planning, installation and maintenance services to keep your business connected and secure.',
      imageSrc: "assets/image/network_infra.jpg"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
      title: 'Biometric Access Control',
      description: 'Advanced access control systems using fingerprint, facial recognition and other biometric technologies.',
      imageSrc: "assets/image/bimetric.jpg"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m3 5 9 3 9-3"/><path d="m3 12 9 3 9-3"/></svg>',
      title: 'Security System Integration',
      description: 'Seamlessly integrate multiple security systems for comprehensive protection and central management.',
      imageSrc: "assets/image/security_system_integration.jpg"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>',
      title: 'Network cabling solution',
      description: 'Structured network cabling design and implementation to optimize performance, security, and scalability.',
      imageSrc: "assets/image/cabling.jpg"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M3.34 17a10 10 0 1 1 17.32 0"/></svg>',
      title: 'Server room setup',
      description: 'Expert server room setup that supports your systems with power, cooling, and connectivity.',
      imageSrc: "assets/image/server-room-mobile-ba.jpg"
    }
  ];
}