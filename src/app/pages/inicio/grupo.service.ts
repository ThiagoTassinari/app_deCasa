import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private data = [
    {
      category: 'Informatica',
      expanded: true,
      products: [
        {},
        {}
      ]
    },
    {
      category: 'Festas & Eventos',
      products: [
        {},
        {}
      ]
    },
    {
      category: 'Obras & Reformas',
      products: [
        {},
        {}
      ]
    }
  ];
  
  private grupo = [];
  constructor() { }
}
