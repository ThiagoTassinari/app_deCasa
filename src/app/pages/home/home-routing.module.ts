import { HomePage } from './home.page';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: "inicio",
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: "perfis",
        loadChildren: () => import('../perfis/perfis.module').then(m => m.PerfisPageModule)
      },
      {
        path: "compras",
        loadChildren: () => import('../compras/compras.module').then(m => m.ComprasPageModule)
      },
      {
        path: "grupos",
        loadChildren: () => import('../grupos/grupos.module').then(m => m.GruposPageModule)
      },
      {
        path: "servicos",
        loadChildren: () => import('../servicos/servicos.module').then(m => m.ServicosPageModule)
      },
      {
        path: 'grupo-servico',
        loadChildren: () => import('../grupo-service/grupo-service.module').then(m => m.GrupoServicePageModule)
      }
    ]
  },
  {
        path: '',
        redirectTo:'tabs/inicio',
        pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
