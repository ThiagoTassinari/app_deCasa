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
  servicos: any = [];
  servicosExpanded: boolean = false;
  servicosExpandHeight: number = 200;
  servicosInEx: [];

  constructor(public navCrtl: NavController, private cartService: CartService) {

    this.servicos = [
      { nome:'Formatação de PC', 
        inclusos: 'Visita Técnica do prestador de serviço',
        exclusos: 'Material não incluso precisando de um armazenamento físico externo pelo usuário',
        expanded: false,
      },
      { nome:'Backup de PC e notebook', 
        inclusos: 'Visita Técnica do prestador de serviço',
        exclusos: 'Material não incluso precisando de um armazenamento físico externo pelo usuário',
        expanded: false
      },
      { nome:'Instalação de softwares',
        inclusos: 'Visita Técnia',
        exclusos: 'Aumento da quantidade de serviços no momento do serviço prestado',
        expanded: false 
      },
      { nome:'Instalação de hardwares',
        inclusos: 'Visita técnica',
        exclusos: 'Aumento da quantidade de serviços no momento do serviço prestado',
        expanded: false 
      },
      { nome:'Instalação de sistemas operacionais', 
        inclusos: 'Visita Técnica',
        exclusos: 'Aumento da quantidade de serviços no momento do serviço prestado', 
        expanded: false 
      },
      { nome:'Serviços gerenciados de TI',
        inclusos: 'Checagem de todas as tarefas apresentadas na empresa',
        exclusos: '',
        expanded: false
      },
      { nome:'Rollout de notebook',
        inclusos: '',
        exclusos: '',
        expanded: false 
      },
      { nome:'Checkup dos equipamentos',
        inclusos: '',
        exclusos: '',
        expanded: false 
      }
    ];
  }

  expandServico(classe_informatica) {
    classe_informatica.expanded = !classe_informatica.expanded;
  }

  ngOnInit() { 

   }
}
