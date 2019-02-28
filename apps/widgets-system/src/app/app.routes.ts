import { Routes } from '@angular/router';
import { EnhancedTitleComponent } from './ui/enhanced-title/enhanced-title.component';
import { SlideToggleComponent } from './ui/slide-toggle/slide-toggle.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: 'enhanced-title', component: EnhancedTitleComponent },
  { path: 'slide-toggle', component: SlideToggleComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
