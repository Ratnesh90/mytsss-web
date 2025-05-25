import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
   standalone: true,
    imports: [CommonModule, HttpClientModule, RouterLink ],
  template: `
    <section class="pt-32 pb-16 md:pb-20 lg:pt-40 lg:pb-32 relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-up">
            <h1 class="heading-xl mb-6 text-slate-900 dark:text-white">
              Advanced Security <span class="text-primary">Solutions</span> for Modern Businesses
            </h1>
            <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-xl">
              Professional security camera installation, network infrastructure, and biometric access control with 9+ years of industry expertise.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
    routerLink="/contact" 
    class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors text-center"
  >
    Get a Free Consultation
  </a>

  <!-- View Our Services -->
  <a 
    routerLink="/service-details" 
    class="border border-slate-300 dark:border-slate-600 hover:border-primary dark:hover:border-primary px-6 py-3 rounded-md text-lg font-medium transition-colors text-center"
  >
    View Our Services
  </a>
            </div>
            
            <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div class="flex items-center space-x-3">
                <div class="bg-primary/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold">Enterprise Security</h3>
                  <p class="text-sm text-slate-600 dark:text-slate-400">Comprehensive protection</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-3">
                <div class="bg-primary/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold">Network Solutions</h3>
                  <p class="text-sm text-slate-600 dark:text-slate-400">Reliable infrastructure</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-3">
                <div class="bg-primary/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <h3 class="font-semibold">Access Control</h3>
                  <p class="text-sm text-slate-600 dark:text-slate-400">Biometric solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="hidden lg:flex justify-center animate-fade-up">
            <div class="relative w-full max-w-md">
              <div class="absolute -top-4 -left-4 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
              <div class="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-70"></div>
              
              <div class="relative bg-white dark:bg-slate-800 shadow-xl rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <img 
                   src="assets/image/cctv_image.jpg" 
                  alt="Security camera installation by professional technician" 
                  class="w-full h-auto object-cover"
                />
                <div class="p-6">
                  <h3 class="font-bold text-lg mb-2">Professional CCTV Camera Installation</h3>
                  <p class="text-slate-600 dark:text-slate-300">
                    Our expert technicians ensure every system is installed with precision and care, 
                    guaranteeing optimal performance and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background decorative elements -->
      <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10"></div>
      <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-tr-full -z-10"></div>
    </section>
  `,
  styles: []
})
export class HeroComponent {

}