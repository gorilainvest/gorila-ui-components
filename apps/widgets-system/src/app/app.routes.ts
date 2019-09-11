import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
         {
           path: "buttons-indicators",
           loadChildren: () =>
             import("@gorilainvest/shell/buttons-indicators").then(
               m => m.ButtonsIndicatorsShellModule
             )
         },
         {
           path: "controls",
           loadChildren: () =>
             import("@gorilainvest/shell/controls").then(
               m => m.ControlsShellModule
             )
         },
         {
           path: "layout",
           loadChildren: () =>
             import("@gorilainvest/shell/layout").then(
               m => m.LayoutShellModule
             )
         },
         {
           path: "popups-modals",
           loadChildren: () =>
             import("@gorilainvest/shell/popups-modals").then(
               m => m.PopupsModalsShellModule
             )
         },
         {
           path: "presentational",
           loadChildren: () =>
             import("@gorilainvest/shell/presentational").then(
               m => m.PresentationalShellModule
             )
         },

         { path: "", component: HomeComponent },
         { path: "**", redirectTo: "", pathMatch: "full" }
       ];
