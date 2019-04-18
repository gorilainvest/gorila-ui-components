import { Routes } from '@angular/router';
import { ArrowVariationComponent } from './ui/arrow-variation/arrow-variation.component';
import { ButtonComponent } from './ui/button/button.component';
import { CardContainerComponent } from './ui/card-container/card-container.component';
import { CountdownButtonComponent } from './ui/countdown-button/countdown-button.component';
import { EnhancedTitleComponent } from './ui/enhanced-title/enhanced-title.component';
import { LoadingComponent } from './ui/loading/loading.component';
import { PopupConfirmComponent } from './ui/popup-confirm/popup-confirm.component';
import { SectionTitleComponent } from './ui/section-title/section-title.component';
import { SlideToggleComponent } from './ui/slide-toggle/slide-toggle.component';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: 'arrow-variation', component: ArrowVariationComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'card-container', component: CardContainerComponent },
  { path: 'countdown-button', component: CountdownButtonComponent },
  { path: 'enhanced-title', component: EnhancedTitleComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'popup-confirm', component: PopupConfirmComponent },
  { path: 'section-title', component: SectionTitleComponent },
  { path: 'slide-toggle', component: SlideToggleComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
