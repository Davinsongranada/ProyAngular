import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component-page';
import { HeroPageComponent } from './pages/Hero/Hero-page.component';
import { DragonballPageComponent } from './pages/counter/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';


export const routes: Routes = [
    {
    path: '',
    component: CounterPageComponent,
    },
    {
        path: 'hero',
        component: HeroPageComponent

    },
    {
        path: 'dragonball',
        component: DragonballPageComponent
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperPageComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
