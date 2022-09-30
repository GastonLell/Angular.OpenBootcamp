import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.css']
})
export class FormularioAnidadoComponent implements OnInit {
  miFormularioAnidado: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const telefonoFijo = this.fb.group({
      prefijo: '',
      numero: ''
    })

    const telefonoMovil = this.fb.group({
      prefijo: '',
      numero: ''
    })

    this.miFormularioAnidado = this.fb.group({
      fijo: telefonoFijo,
      movil: telefonoMovil
    })

  }

}
