import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyStandaloneComponentComponent } from './my-standalone-component/my-standalone-component.component';
export const routes: Routes = [
    {
        path: '',
        component: MyStandaloneComponentComponent,
      },

];
