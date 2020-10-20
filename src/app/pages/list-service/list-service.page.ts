import { Router } from '@angular/router';
import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.page.html',
  styleUrls: ['./list-service.page.scss'],
})
export class ListServicePage implements OnInit {

  showCard = false;
  classes = [];
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.classes = this.cartService.getClasses();
  }

}
