import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Items } from '../modelos/items.modelo';

@Injectable({
  providedIn: 'root',
})
export class ItemsService implements OnInit {
  eventIngreso = new EventEmitter<number>();
  eventEgreso = new EventEmitter<number>();
  suma = new EventEmitter<number>();
  
  itemsIngresos = [
    new Items('Salario', 600),
    new Items('Arriendo', 600),
    new Items('Subsidio', 100),
  ];
  itemsEgresos = [
    new Items('Comida', 600),
    new Items('Arriendo', 600),
    new Items('Vestido', 50),
  ];
  sumaIngreso: number = 0;
  sumaEgreso: number = 0;
  constructor() {
  }
  ngOnInit(): void {  
  }
  
  cargarIngreso(item: Items) {
    this.itemsIngresos.push(item);
    this.sumarIngresos();
  }
  cargarEgresos(item: Items) {
    this.itemsEgresos.push(item);
    this.sumarEgresos();
  }
  sumarIngresos() {
    let suma = 0;
    let presupuesto: number=0;
    for (let item of this.itemsIngresos.values()) {
      suma += item['valor']; //Se suman los valores de cada item
    }
    this.eventIngreso.emit(suma);
    
    this.sumaIngreso = suma;
    presupuesto = suma - this.sumaEgreso;
    this.suma.emit(presupuesto)
  }
  sumarEgresos() {
    let suma:number = 0;
    let presupuesto: number=0;
    for (let item of this.itemsEgresos.values()) {
      suma += item['valor'];
    }
    //alert(suma)
    this.eventEgreso.emit(suma);
    presupuesto = this.sumaIngreso - suma;
    this.suma.emit(presupuesto)
    this.sumaEgreso = suma;
  }
  eliminarIngreso(id: number){
    this.itemsIngresos.splice(id,1);
    this.sumarIngresos();
  }
  eliminarEgreso(id: number){
    this.itemsEgresos.splice(id,1);
    this.sumarEgresos();
  }
 
  /*   const resultMapeo =  Object.keys(this.items).map(key=>{
    const value = this.items[key]
      console.log(key+'->'+ value)
    }) */
  /* console.log(Object.values(this.items))
    Object.entries(this.items).map(entry=>{
      const [key, value]= entry
      console.log({key, value})
    }) */
  /* console.log(Object.values(this.items2).reduce((total, actual)=>{
      return total + actual;
    },0)
    ) */

  /* Object.entries(this.items2).forEach((par) => {
      const llave = par[0];
      const valor = par[1];
     
      if (typeof valor =="string") this.items2[llave] = valor.toUpperCase(); 
    })
    console.log(this.items2); */

  /* let recipeMap = new Map([
      ['pepino', 500],
      ['tomates', 350],
      ['cebollas',    50]
    ]); */
}
