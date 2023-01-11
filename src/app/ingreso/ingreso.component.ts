import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Items } from '../modelos/items.modelo';
import { ItemsService } from '../servicios/items.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  items: Items[]=[]
    
  constructor(private itemService: ItemsService) {
    //alert("Este es constructor en app ingreso")
   //this.itemService.sumar()
   this.items = this.itemService.itemsIngresos//Se cargan los items desde arreglo en itemService mientras se generan persistentemente
   }

  ngOnInit(): void {        
   
  }
  eliminar(it: number){
    this.itemService.eliminarIngreso(it);
  }
  
}
