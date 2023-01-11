import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from './servicios/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'presupuesto-app';
  totalIngesos: number = 0;
  totalEgresos: number = 0;
  presupuestoDisponible:number= 0;
  //porcentaje:number = 0;
  constructor(private itemsService: ItemsService){
    //Suma total de los ingresos
    this.itemsService.eventIngreso.subscribe((total:number)=>{
      this.totalIngesos = total;
    })
    this.itemsService.eventEgreso.subscribe((total:number)=>{
      this.totalEgresos = total;
    })
    this.itemsService.suma.subscribe((dato:number)=>{
      this.presupuestoDisponible= dato;
    })
    
    
  }
  ngOnInit(): void {

  }
  
  getPorcentaje(){
    //let porcentaje:number=0;
    return (this.totalIngesos/ this.totalEgresos);
    
  }
    
}
