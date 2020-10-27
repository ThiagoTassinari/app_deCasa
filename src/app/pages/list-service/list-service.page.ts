import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.page.html',
  styleUrls: ['./list-service.page.scss'],
})
export class ListServicePage implements OnInit {

  showCard = false;
  services: any = [];
  showService = 0;

  constructor(public navCrtl: NavController, private cartService: CartService) {

    this.services = [
      { 
        id: 1,
        name:'Formatação de PC', 
        inclusos: 'Visita Técnica do prestador de serviço',
        exclusos: 'Material não incluso precisando de um armazenamento físico externo pelo usuário',
        expanded: false,
      },
      { 
        id: 2,
        name:'Backup de PC e notebook', 
        inclusos: 'Visita Técnica do prestador de serviço',
        exclusos: 'Material não incluso precisando de um armazenamento físico externo pelo usuário',
        expanded: false
      },
      { 
        id: 3,
        name:'Instalação de softwares',
        inclusos: 'Visita Técnia',
        exclusos: 'Aumento da quantidade de serviços no momento do serviço prestado',
        expanded: false 
      },
      { 
        id: 4,
        name:'Instalação de hardwares',
        inclusos: 'Visita técnica',
        exclusos: 'Aumento da quantidade de serviços no momento do serviço prestado',
        expanded: false 
      },
      { 
        id: 5,
        name:'Instalação de sistemas operacionais', 
        inclusos: 'Visita Técnica',
        exclusos: 'Aumento da quantidade de serviços no momento do serviço prestado', 
        expanded: false 
      },
      { 
        id: 6,
        name:'Serviços gerenciados de TI',
        inclusos: 'Checagem de todas as tarefas apresentadas na empresa',
        exclusos: '',
        expanded: false
      },
      { 
        id: 7,
        name:'Rollout de notebook',
        inclusos: '',
        exclusos: '',
        expanded: false 
      },
      { 
        id: 8,
        name:'Checkup dos equipamentos',
        inclusos: '',
        exclusos: '',
        expanded: false 
      }
    ];
  }

  showListService(serviceId) {
    this.showService = serviceId;
  }

  addCart() {

  }
  
  ngOnInit() { 

   }
}
