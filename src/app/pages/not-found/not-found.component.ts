import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
   standalone: true,
  template: `
    <div class="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-800 px-4">
      <div class="text-center">
        <h1 class="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 class="text-3xl font-semibold mb-6 text-slate-900 dark:text-white">Page Not Found</h2>
        <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <a 
          routerLink="/" 
          class="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class NotFoundComponent {

}