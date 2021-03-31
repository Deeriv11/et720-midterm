import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paintings',
  template: `
   <div class="content is-large">
    <h1>Paintings</h1>
  
  </div>

<div class="columns vertical nested">

  <div class="column">
    <div class="card" style="width: 18rem; background-color: lightblue;">
  <img src="https://et710.com/website/war2/index.html" class="card-img-top ">
  <div class="card-body">
   
  </div>
</div>
  </div>
  `,
  styles: [
  ]
})
export class PaintingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
