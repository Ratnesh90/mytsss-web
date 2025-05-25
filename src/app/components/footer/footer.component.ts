import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
   standalone: true,
    imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-slate-900 text-white pt-16 pb-8">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <div class="flex items-center space-x-2 mb-4">
            <img 
    src="/assets/image/MYTSSS.png" 
    alt="MYTSSS Logo" 
    class="h-12 w-auto"
  />
              
            </div>
            <h2> TWIN SMART SUPPORT SERVICES PVT. LTD.</h2>
            <p class="text-slate-400 mb-6">
              Professional security and network services with 9+ years of industry experience. 
              Trusted by businesses of all sizes.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-slate-400 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" class="text-slate-400 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" class="text-slate-400 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" class="text-slate-400 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li *ngFor="let link of quickLinks">
                <a 
                  [routerLink]="link.path"
                  class="text-slate-400 hover:text-primary transition-colors"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Our Services</h3>
            <ul class="space-y-2">
              <li *ngFor="let service of services">
                <a 
                  [routerLink]="service.path"
                  class="text-slate-400 hover:text-primary transition-colors"
                >
                  {{ service.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <ul class="space-y-4">
              <li class="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span class="text-slate-400">+91-95550 36661</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary mt-0.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span class="text-slate-400">info&#64;mytsss.com</span>
              </li>
              <li class="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span class="text-slate-400">
                  CO,105,Office No-8, IInd Floor, near Baba Arcade Market, Harola, Sector 5, Noida, <br />Uttar Pradesh 201301
                  
                </span>
              </li>
              <li class="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary mt-0.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span class="text-slate-400">
                  Monday - Friday: 8AM - 6PM<br />
                  Weekend: By appointment
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="my-8 h-px bg-slate-800"></div>
        
        <div class="text-center text-slate-500">
          <p>© {{ currentYear }} Twin Smart Support Services Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  quickLinks = [
    { name: 'Services', path: '/service-details' },
    { name: 'Clients', path: '/client' },
     { name: 'Industries', path: '/industries' },
    { name: 'About Us', path: '/timline' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  services = [
    { name: 'Security Camera Installation', path: '/cctv-installation' },
    { name: 'Network Infrastructure', path: '/network' },
    { name: 'Biometric Access Control', path: '/biometric' },
    { name: 'Security Audits', path: '/service-details' },
    { name: '24/7 Monitoring', path: '/cctv-amc' },
  ];
}