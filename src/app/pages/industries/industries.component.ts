import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.component.html',
})
export class IndustriesComponent {
  industries = [
    {
      name: 'Food & Beverage',
      description:
        'We’ve equipped food processing units and beverage plants with high-definition CCTV systems to ensure hygiene monitoring, networking solutions for production line automation, and server room setups to handle ERP and compliance data efficiently.',
      services: ['CCTV Surveillance', 'LAN & WAN Setup', 'Server Room Deployment'],
    },
    {
      name: 'Housing & Apartments',
      description:
        'We’ve secured residential complexes with advanced CCTV systems for entrances, basements, and common areas. Our team has also provided intercom and fiber-based networking solutions to ensure smooth communication and internet access.',
      services: ['CCTV Systems', 'FTTH Networking', 'Intercom Integration'],
    },
    {
      name: 'Malls',
      description:
        'Large retail malls rely on us for seamless surveillance, data networking, and centralized server rooms for tenant management systems, retail analytics, and energy management.',
      services: ['CCTV Surveillance', 'Structured Cabling', 'Server Room Setup'],
    },
    {
      name: 'Cold Storage',
      description:
        'In cold storage environments, we provide industrial-grade CCTV cameras with night vision, temperature monitoring systems, and server-backed data logging over a robust network.',
      services: ['Temperature Surveillance', 'Server-Based Logging', 'Secure Network Setup'],
    },
    {
      name: 'IT Companies',
      description:
        'We’ve partnered with IT firms to deploy advanced LAN/WAN infrastructure, secure server rooms, and high-capacity CCTV systems for office safety and compliance.',
      services: ['Server Room Design', 'High-Speed Networking', 'Access Control & CCTV'],
    },
    {
      name: 'Automobile Workshops & Showrooms',
      description:
        'Our tailored solutions for automobile businesses include vehicle tracking via CCTV, customer waiting area monitoring, and secure networking for billing and CRM systems.',
      services: ['CCTV Setup', 'Wired/Wireless Network', 'Server Integration'],
    },
    {
      name: 'Warehouses',
      description:
        'Warehouses are equipped with wide-angle CCTV cameras, inventory scanning networks, and backup server rooms for uninterrupted logistics and stock tracking.',
      services: ['Wide Area CCTV', 'Networking for Scanners', 'Redundant Server Room Setup'],
    },
    {
      name: 'Hotels',
      description:
        'We serve hotels with comprehensive networking for guest rooms, surveillance for common areas and entrances, and server rooms for property management systems.',
      services: ['Guest Wi-Fi Networks', 'Surveillance Systems', 'Server Room with PMS Software'],
    },
  ];
}
