import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-timeline',
   standalone: true,
    imports: [CommonModule, HttpClientModule],
  template: `
    <section id="timeline" class="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg mb-4 text-slate-900 dark:text-white">Our <span class="text-primary">Journey</span></h2>
          <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
           From our humble beginnings, we have grown into a trusted name in CCTV Security and Network Infrastructure solutions.
            Over the years, we've had the privilege to serve a diverse range of industries — from hospitality and housing to IT parks and cold storage facilities — delivering end-to-end services that include surveillance systems, structured cabling, server room setups, EPABX & IP PBX solutions, and more. Our commitment to reliability, innovation, and customer satisfaction has made us a preferred partner for businesses looking to secure and streamline their operations.
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative flex flex-col sm:items-center">
          <div class="absolute hidden md:block left-1/2 transform -translate-x-1/2 border-l-2 border-dashed border-primary/40 h-full z-0"></div>
          
          <div *ngFor="let event of timelineEvents; let i = index; let isLast = last" 
               class="relative z-10 flex items-start mb-12 w-full"
               [ngClass]="{'md:flex-row-reverse': i % 2 !== 0}">
            <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900">
                <div class="w-6 h-6 bg-primary rounded-full"></div>
              </div>
            </div>
            
            <div class="md:w-1/2" [ngClass]="{'md:pr-16': i % 2 === 0, 'md:pl-16': i % 2 !== 0}">
              <div class="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow">
                <div class="mb-3 inline-flex items-center space-x-2">
                  <span [innerHTML]="event.icon"></span>
                  <span class="font-bold text-primary">{{ event.year }}</span>
                </div>
                <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">{{ event.title }}</h3>
                <p class="text-slate-600 dark:text-slate-400">{{ event.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Stats -->
        <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div *ngFor="let stat of stats" class="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg text-center">
            <div class="text-3xl lg:text-4xl font-bold text-primary mb-2">{{ stat.value }}</div>
            <div class="text-slate-700 dark:text-slate-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class TimelineComponent {
  timelineEvents: TimelineEvent[] = [
    {
      year: '2016',
      title: 'Company Founded',
      description: 'TWIN SMART SUPPORT SERVICES PVT LTD.  was established with a vision to provide high-quality security solutions for businesses.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>'
    },
    {
      year: '2018',
      title: 'First Major Contract',
      description: 'Secured our first major contract with a goverment of Delhi , installing security systems across 15 schools.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
    },
    {
      year: '2020',
      title: 'Service Expansion',
      description: 'Expanded our services to include network infrastructure and biometric access control solutions.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Received industry recognition for excellence in security services and innovation.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/><circle cx="12" cy="8" r="7"/></svg>'
    },
    {
      year: '2024',
      title: 'National Presence',
      description: 'Expanded operations to others states,establishing presence in Delhi, Haryan, Maharastra, Rajshtan, Gujrat, Uttrakhand, Bihar & Jharkhand.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
    }
  ];

  stats: Stat[] = [
    {
      value: '9+',
      label: 'Years of Experience'
    },
    {
      value: '500+',
      label: 'Completed Projects'
    },
    {
      value: '250+',
      label: 'Happy Clients'
    },
    {
      value: '24/7',
      label: 'Customer Support'
    }
  ];
}