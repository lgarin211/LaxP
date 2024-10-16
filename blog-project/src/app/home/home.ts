import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    blogs = [
        { title: 'Blog Post 1', link: '/blog/1' },
        { title: 'Blog Post 2', link: '/blog/2' },
        { title: 'Blog Post 3', link: '/blog/3' }
    ];
}