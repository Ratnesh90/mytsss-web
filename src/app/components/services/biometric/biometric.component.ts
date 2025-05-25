import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-biometric',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biometric.component.html',
  styleUrls: ['./biometric.component.css'] // Optional: use if you want external CSS
})
export class BiometricComponent {
  heading = 'Biometric Installation Services';
  intro = 'We offer professional installation services for Biometric Attendance and Access Control Systems tailored for businesses and institutions starting at just ₹999 per device.';

  benefits = [
    'Authorized Dealer of industry-leading biometric brands like ESSL, Realtime, Mantra, and Hikvision.',
    'Trained Technicians experienced in factory, office, school, hospital, and showroom installations.',
    'Custom Configuration based on your attendance and access control policies.',
    'Comprehensive Support including hardware setup, software integration, and staff training.',
    'Service Warranty and affordable AMC plans available post-installation.'
  ];

  inclusions = [
    {
      title: 'Site Assessment & Planning',
      points: [
        'Entry/exit point review, power and network layout planning.',
        'Optimal device placement recommendations.'
      ]
    },
    {
      title: 'Hardware Installation',
      points: [
        'Mounting biometric devices on wall or desktop.',
        'Power and LAN/Wi-Fi/GPRS cabling.'
      ]
    },
    {
      title: 'Software Setup',
      points: [
        'Installing and configuring attendance software.',
        'Registering employees and defining access levels.'
      ]
    },
    {
      title: 'Training & Handover',
      points: [
        'On-site demo for staff on attendance system usage.',
        'Report generation and admin panel walkthrough.'
      ]
    },
    {
      title: 'Post-Installation Support',
      points: [
        'One-month free technical support.',
        'AMC plans available for ongoing service.'
      ]
    }
  ];

  devices = [
    'Fingerprint Attendance Machines – ₹999 onwards',
    'Face Recognition Systems – ₹1499 onwards',
    'Biometric with Access Control (Door Locks) – ₹1999 onwards',
    'Multi-location Synchronization Setup',
    'Mobile App & Cloud Integration'
  ];

  notes = [
    'Minimum Installation Order is ₹5,000 per location.',
    'Installations outside business zones may include travel charges.',
    'Home users can opt for service at ₹999 per visit.'
  ];

  extras = [
    'Centralized attendance monitoring across multiple branches.',
    'Payroll and HRMS integration.',
    'Staff deployment with ESIC, PF, and minimum wage compliance.'
  ];

  contact = {
    name: 'Mr. Aryan',
    phone: '+91-95550 36661'
  };
}
