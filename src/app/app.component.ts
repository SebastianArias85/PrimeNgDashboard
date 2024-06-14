import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  sidebarVisible: boolean = false;

  /*BOTON DEL USUARIO*/
  itemsM: MenuItem[] | undefined;

  /*BOTON DEL SIDEBAR*/
  items: MenuItem[] | undefined;

  /*BOTONES DEL MENU DEL SIDEBAR*/
  itemsO: MenuItem[] | undefined;

  ngOnInit() {
    /*OPCIONES DEL MENU SIDEBAR*/
    this.itemsO = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home',
      },
      {
        label: 'Acerca de',
        icon: 'pi pi-fw pi-users',
        routerLink: '/about',
      },
      {
        label: 'Contacto',
        icon: 'pi pi-fw pi-inbox',
        routerLink: '/contac',
      },
    ];

    /*MENU USUARIO*/
    this.itemsM = [
      {
        label: 'MENU',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Configuración',
            icon: 'pi pi-fw pi-cog',
          },
          {
            separator: true,
          },
          {
            label: 'Salir',
            icon: 'pi pi-fw pi-power-off',
          },
        ],
      },
    ];
  }
}
