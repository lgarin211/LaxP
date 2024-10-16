// src/app/blog/blog.component.ts
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Blog Angular');
    this.meta.addTags([
      { name: 'description', content: 'Blog Angular dengan SEO yang baik' },
      { name: 'author', content: 'Nama Anda' },
      { name: 'keywords', content: 'Angular, Blog, SEO' }
    ]);
  }
}