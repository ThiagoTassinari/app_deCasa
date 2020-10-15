import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Informática',
      expanded: true,
      icon: 'laptop-outline',
      products: [
        {id: 0, name: 'Formatação de PC', price: '60' },
        {id: 1, name: 'Backup', price: '50' },
        {id: 2, name: 'Instalação de softwares', price: '40' },
        {id: 3, name: 'Instalação de hardwares', price: '80' },
      ]
    },
    {
      category: 'Festas e Eventos',
      icon: 'cafe-outline',
      products: [
        {id: 4, name: 'Casamento', price: '1100' },
        {id: 5, name: 'Aniversário de 15 anos', price: '800' },
        {id: 6, name: 'Confraternização', price: '900' },
      ]
    },
    {
      category: 'Obras e reformas',
      icon: 'build-outline',
      products: [
        { id: 7, name: 'Contra Piso', price: '200' },
        { id: 8, name: 'Gesso', price: '250' },
        { id: 9, name: 'Pintura', price: '100' } 
      ]
    },
    {
      category: 'Assistência Técnica',
      icon: 'globe-outline',
      products: [
        {id: 10, name: 'Ventilador', price: '110' },
        {id: 11, name: 'Máquina de lavar', price: '250' },
        {id: 12, name: 'Geladeira', price: '300' },
        {id: 13, name: 'Fogão', price: '150' },
      ]
    },
    {
      category: 'Fretes e Entregas',
      icon: 'bus-outline',
      products: [
        { id: 14, name: 'Caminhão Toco' },
        { id: 15, name: 'Caminhão Truck' },
        { id: 16, name: 'Carretas' },
        { id: 17, name: 'Motoboy' },
      ]
    },
    {
      category: 'Idosos - Serviços especializados',
      icon: 'body-outline',
      products: [
        { id: 18, name: 'Cuidador de idosos' },
        { id: 19, name: 'Fisioterapia domiciliar' },
        { id: 20, name: 'Terapia ocupacional' }
      ]
    },
    {
      category: 'Engenharia e Arquitetura',
      icon: 'settings-outline',
      product: [
        { id: 21, name: 'Laudos- Eng.Civil' },
        { id: 22, name: 'Projeto Água e Esgoto' },
        { id: 23, name: 'Projeto de climatização'},
        { id: 24, name: 'Projeto de  arquitetura '},
      ]
    },
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
