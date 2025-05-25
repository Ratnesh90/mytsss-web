import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicedetails',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="pt-20 pb-12 bg-white dark:bg-slate-900">
      <div class="container-custom text-center">
     
        <div class="text-center mb-16">
          <h2 class="heading-lg mb-4 text-slate-900 dark:text-white"> Our <span class="text-primary">Services</span></h2>
          <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            At MYTSSS, we provide comprehensive security, surveillance, and IT infrastructure solutions customized to meet the evolving needs of modern businesses. Whether you operate a single facility or a multi-site enterprise, our team delivers highly reliable and scalable systems that ensure protection, efficiency, and peace of mind.
          </p>
        </div>
       

        

        <!-- Services List -->
        <div class="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
        <!-- Surveillance Systems -->
          <div class="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-slate-800">
            <h3 class="text-xl font-semibold text-primary mb-2">CCTV & Surveillance</h3>
            <p class="text-slate-600 dark:text-slate-300">
              End-to-end surveillance solutions including CCTV camera setup, remote viewing, storage, and system integration for residential, commercial, and industrial properties.
            </p>
          </div>
         <!-- Network Infrastructure Solutions -->
<div class="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-slate-800">
  <h3 class="text-xl font-semibold text-primary mb-2">Network Infrastructure </h3>
  <p class="text-slate-600 dark:text-slate-300">
    End-to-end planning, deployment, and management of robust network infrastructure — including structured cabling, routers, switches, wireless access points, and firewall configurations. Our solutions are designed for scalability, security, and optimal performance across offices, warehouses, and data centers.
  </p>
</div>

          <!-- AMC Services -->
          <div class="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-slate-800">
            <h3 class="text-xl font-semibold text-primary mb-2">Annual Maintenance Contracts (AMC)</h3>
            <p class="text-slate-600 dark:text-slate-300">
              Ensure uninterrupted performance of your security and IT systems with our flexible AMC plans. Our certified technicians provide preventive maintenance, emergency support, and quick turnaround repairs.
            </p>
          </div>

          <!-- BMS Operators -->
          <div class="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-slate-800">
            <h3 class="text-xl font-semibold text-primary mb-2">BMS Operator Deployment</h3>
            <p class="text-slate-600 dark:text-slate-300">
              Skilled BMS operators available for deployment in residential, commercial, and industrial environments. Our operators are trained to manage HVAC, lighting, fire safety, access control, and energy management systems effectively.
            </p>
          </div>
          <!-- Server Room Setup -->
<div class="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-slate-800">
  <h3 class="text-xl font-semibold text-primary mb-2">Server Room Setup</h3>
  <p class="text-slate-600 dark:text-slate-300">
    End-to-end design and deployment of secure and efficient server rooms. From rack installation and power management to cooling, fire safety, and access control — we deliver robust infrastructure ready for mission-critical operations.
  </p>
</div>

<!-- Network Cabling -->
<div class="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-slate-800">
  <h3 class="text-xl font-semibold text-primary mb-2">Network Cabling</h3>
  <p class="text-slate-600 dark:text-slate-300">
    Professional network cabling services for structured LAN, fiber optics, and data center interconnects. We ensure high-speed connectivity, signal integrity, and future-ready installations for seamless communication across your premises.
  </p>
</div>
<!-- EPABX & IP PBX Solutions -->
<div class="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-slate-800">
  <h3 class="text-xl font-semibold text-primary mb-2">EPABX & IP PBX Solutions</h3>
  <p class="text-slate-600 dark:text-slate-300">
    Seamless voice communication systems for businesses of all sizes. We provide installation, configuration, and maintenance of EPABX and IP PBX solutions that support internal and external calling, call routing, voicemail, IVR, and remote access — ensuring smooth and professional connectivity.
  </p>
</div>

          <!-- Cybersecurity Audits -->
          <div class="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-slate-800">
            <h3 class="text-xl font-semibold text-primary mb-2">Cybersecurity Audits</h3>
            <p class="text-slate-600 dark:text-slate-300">
              Comprehensive assessment of your organization's cybersecurity framework to identify vulnerabilities, compliance gaps, and performance issues. Detailed reporting and remediation plans included.
            </p>
          </div>

          <!-- Managed IT Services -->
          <div class="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-slate-800">
            <h3 class="text-xl font-semibold text-primary mb-2">Managed IT Services</h3>
            <p class="text-slate-600 dark:text-slate-300">
              Let us handle your IT infrastructure — from servers and backups to email, endpoints, and cloud services. Our proactive management ensures business continuity and optimized uptime.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ServicedetailsComponent {}
