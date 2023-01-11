import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Items } from '../modelos/items.modelo';
import { ItemsService } from '../servicios/items.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 // @ViewChild('signo') signo1: ElementRef;
 
  descripcion: string='';
  valor: number=0;
  signo: string ="ing";
  items : Items[]=[];
  constructor(private itemSevice: ItemsService) { 
    this.itemSevice.sumarIngresos();//Se suman los items que estan en itemsServices para que se carguen en app.component.ts por medio de eventEmitter
    this.itemSevice.sumarEgresos();//Se suman los items que estan en itemsServices para que se carguen en app.component.ts por medio de eventEmitter
  }

  ngOnInit(): void {
  }
  tipoOperacion(event){
    this.signo = event.target.value;
  }
  agregarItem(){
    let item = new Items(this.descripcion, this.valor)
    if(this.signo === "ing")
    {
      this.itemSevice.cargarIngreso(item);
    }
    else if (this.signo ==="egr") {
      this.itemSevice.cargarEgresos(item)
    } 
  }
}
