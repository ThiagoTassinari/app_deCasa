import { CartService } from './../../cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo-service',
  templateUrl: './grupo-service.page.html',
  styleUrls: ['./grupo-service.page.scss'],
})
export class GrupoServicePage implements OnInit {

  classes = [];

  sliderConfig = {
    spaceBetween: 9,
    centeredSlides: true,
    slidesPerView: 1.3
  }
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.classes = this.cartService.getClasses();
    console.log(this.classes)
  }
  
}
