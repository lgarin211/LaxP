import { Routes } from '@angular/router';
// import blog.ts
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent}

];
