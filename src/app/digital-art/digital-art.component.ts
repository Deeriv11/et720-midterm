import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-art',
  template: `
   <div class="content is-large">
    <h1>Digital Art</h1>
    <h1>Art Created with Photoshop and/or SAI Paint Tool</h1>
  </div>

<div class="columns vertical nested">

  <div class="column">
    <div class="card" style="width: 18rem; background-color: lightblue;">
  <img src="https://et710.com/website/war2/img/stargazer.png" class="card-img-top ">
  <div class="card-body">
    <p class="card-text">Stargazer</p>
  </div>
</div>
  </div>

  <div class="column">
   <div class="card" style="width: 18rem;background-color: lightblue;">
  <img src="https://et710.com/website/war2/img/Stargazer-feather-hoop.png" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Stargazer</p>
  </div>
</div>
  </div>

   <div class="column">
   <div class="card" style="width: 18rem; background-color: lightblue;">
  <img src="https://et710.com/website/war2/img/stargazer-one.png" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Stargazer</p>
  </div>
</div>
  </div>

</div>

<div class="columns vertical nested">

  <div class="column">
   <div class="card" style="width: 18rem;background-color: lightblue;">
  <img src="https://et710.com/website/war2/img/stargazer-original.png" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Stargazer</p>
  </div>
</div>
  </div>
 
    <div class="column">
   <div class="card" style="width: 18rem;background-color: lightblue;">
  <img src="https://et710.com/website/war2/img/loona-black.png" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">LOONA Galaxy</p>
  </div>

</div>
  </div>


   <div class="column">
   <div class="card" style="width: 18rem; background-color: lightblue;">
  <img src="https://et710.com/website/war2/img/loona-white.png" class="card-img-top" >
  <div class="card-body">
    <p class="card-text">LOONA Galaxy</p>
  </div>
</div>
  </div>

</div>

<div class="columns vertical nested">

  <div class="column">
    <div class="card" style="width: 18rem; background-color: lightblue;">
  <img class="image is-64x64" src="https://et710.com/website/war2/img/blind-owl.jpg" class="card-img-top ">
  <div class="card-body bg-primary">
    <p class="card-text">Blind Owl</p>
  </div>
</div>
  </div>

  <div class="column">
   <div class="card" style="width: 18rem;background-color: lightblue;">
  <img src="https://et710.com/website/war2/img/shinee-moon.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Moon</p>
  </div>
</div>
  </div>

   <div class="column">
   <div class="card" style="width: 18rem; background-color: lightblue;">
  <img src="https://et710.com/website/war2/img/political.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Gunfire</p>
  </div>
</div>
  </div>

</div>

<div class="columns vertical nested">

  <div class="column">
    <div class="card" style="width: 18rem; background-color: lightblue;">
  <img class="image is-64x64" src="https://et710.com/website/war2/img/name-logo.jpg" class="card-img-top ">
  <div class="card-body bg-primary">
    <p class="card-text">Rebecca</p>
  </div>
</div>
  </div>

 


  `,
  styles: [
  ]
})
export class DigitalArtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
