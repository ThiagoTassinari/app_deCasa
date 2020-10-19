import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private classe_informatica = [
    { id: 0, name: 'Formatação de PC', icon: 'laptop-outline'},
    { id: 1, name: 'Backup', icon: 'laptop-outline'  },
    { id: 2, name: 'Instalação de softwares', icon: 'laptop-outline'  },
    { id: 3, name: 'Instalação de hardwares', icon: 'laptop-outline'  },
    { id: 4, name: 'Instalação de sistemas operacionais', icon: 'laptop-outline'  },
    { id: 5, name: 'Serviços gerenciados de TI', icon: 'laptop-outline'  },
    { id: 6, name: 'Rollout de notebook', icon: 'laptop-outline'  },
    { id: 7, name: 'Checkup', icon: 'laptop-outline' }
  ];

/*   private classe_festa_eventos = [
    {id: 4, name: 'Casamento', icon: 'cafe-outline' },
    {id: 5, name: 'Aniversário de 15 anos', icon: 'cafe-outline' },
    {id: 6, name: 'Confraternização', icon: 'cafe-outline' },
    {id: 7, name: 'Atendimento em mesas', icon: 'cafe-outline' },
  ]; */

  private data = [
    {
      category: 'Informática',
      expanded: true,
      icon: 'laptop-outline',
      products: [
        {id: 0, name: 'Formatação de PC' },
        {id: 1, name: 'Backup' },
        {id: 2, name: 'Instalação de softwares' },
        {id: 3, name: 'Instalação de hardwares' },
      ]
    },
    {
      category: 'Festas e Eventos',
      icon: 'cafe-outline',
      products: [
        {id: 4, name: 'Casamento' },
        {id: 5, name: 'Aniversário de 15 anos' },
        {id: 6, name: 'Confraternização' },
        {id: 7, name: 'Atendimento em mesas'},
      ]
    },
    {
      category: 'Obras e reformas',
      icon: 'build-outline',
      products: [
        { id: 8, name: 'Contra Piso' },
        { id: 9, name: 'Gesso' },
        { id: 10, name: 'Pintura' } 
      ]
    },
    {
      category: 'Assistência Técnica',
      icon: 'globe-outline',
      products: [
        {id: 11, name: 'Ventilador' },
        {id: 12, name: 'Máquina de lavar' },
        {id: 13, name: 'Geladeira' },
        {id: 14, name: 'Fogão' },
      ]
    },
    {
      category: 'Fretes e Entregas',
      icon: 'bus-outline',
      products: [
        { id: 15, name: 'Caminhão Toco' },
        { id: 16, name: 'Caminhão Truck' },
        { id: 17, name: 'Carretas' },
        { id: 18, name: 'Motoboy' },
      ]
    },
    {
      category: 'Idosos - Serviços especializados',
      icon: 'body-outline',
      products: [
        { id: 19, name: 'Cuidador de idosos' },
        { id: 20, name: 'Fisioterapia domiciliar' },
        { id: 21, name: 'Terapia ocupacional' }
      ]
    },
    {
      category: 'Engenharia e Arquitetura',
      icon: 'settings-outline',
      product: [
        { id: 22, name: 'Laudos- Eng.Civil' },
        { id: 23, name: 'Projeto Água e Esgoto' },
        { id: 24, name: 'Projeto de climatização'},
        { id: 25, name: 'Projeto de  arquitetura '},
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

  getClasses() {
    return this.classe_informatica;
/*     return this.classe_festa_eventos; */
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
