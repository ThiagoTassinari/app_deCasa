import { Router } from '@angular/router';
import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
};

cart = [];
items = [];

sliderConfig = {
  spaceBetween: 9,
  centeredSlides: true,
  slidesPerView: 1.3
}

constructor(private cartService: CartService, private router: Router) { }

ngOnInit() {
  this.cart = this.cartService.getCart();
  this.items = this.cartService.getProducts();
}

addToCart(product) {
  this.cartService.addProduct(product);
}

openCart() {
  this.router.navigate(['cart']);
  }
}
