import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-illustations',
  template: `
    <div class="content is-large">
    <h1>InDesign</h1>
    <h1>Art And Newspaper Pages Made With InDesign</h1>
  </div>

<div class="columns vertical nested">

  <div class="column">
    <div class="card" style="width: 18rem; background-color: lightblue;">
  <img src="https://et710.com/website/war2/img/mash.jpg" class="card-img-top ">
  <div class="card-body">
    <p class="card-text">Untitled</p>
  </div>
</div>
  </div>

  <div class="column">
   <div class="card" style="width: 18rem;background-color: lightblue;">
  <img src="https://et710.com/website/war2/img/butterfly.png" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Butterfly</p>
  </div>
</div>
  </div>
  `,
  styles: [
  ]
})
export class IllustationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
