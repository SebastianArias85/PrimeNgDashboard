import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {  
  
  items: any;

  constructor(private router:Router){}

  ngOnInit() {
    this.items = [
        { title: 'Datos generales' },
        { title: 'Datos laborales' },
        { title: 'Datos familiares' },
        { title: 'Capacitaciones' },
        { title: 'Comisiones' },
        { title: 'Actividad Operativa' },
        { title: 'Documentación Asociada' }
    ];    
    
  }
}
