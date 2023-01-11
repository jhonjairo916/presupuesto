import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../modelos/items.modelo';
import { ItemsService } from '../servicios/items.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  items : Items[]=[];
  @Input() totalIngreso: number=0;
  constructor(private itemsService: ItemsService) { 
    this.items= this.itemsService.itemsEgresos
    
  }

  ngOnInit(): void {
    
  }
  eliminar(i: number){
    this.itemsService.eliminarEgreso(i);
  }
  getPorcentaje(e){
    //const e:number = this.items.indexOf(egreso);
   return this.items[e].valor / this.totalIngreso
    
  }

}
