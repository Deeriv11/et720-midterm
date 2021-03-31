import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <section class="hero is-black is-bold ">
  <div class="tabs">
  <ul>
    <li class="is-active"><a href="#">Home</a></li>
    <li><a routerLink="/AboutMe">About</a></li>
    <li><a routerLink="/ContactMe">Contact</a></li>
  </ul>
</div>
 </section>

  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
