import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryboardComponent } from './storyboard/storyboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'story/:id',
    component: StoryboardComponent
  }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
