import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  @Input() presupuestoDisponible: number;
  @Input() totalIngesos: number;
  @Input() totalEgresos: number;
  @Input() porcentaje: number;
  constructor() { }

  ngOnInit(): void {
  }

}
