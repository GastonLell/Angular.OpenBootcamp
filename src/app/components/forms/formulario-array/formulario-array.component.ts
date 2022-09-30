import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.css']
})
export class FormularioArrayComponent implements OnInit {
  miFormularioArray: FormGroup = new FormGroup({})
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormularioArray = this.fb.group({
      nombre: '',
      apellido: '',
      telefonos: this.fb.array([])
    })
  }

  get telefonosFormulario(): FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray;
  }

  agregarTelefono(){
    // crear grupo
    const telefonoNuevo = this.fb.group({
      prefijo: '',
      numero: ''
    })

    // añadir a lista de form
    this.telefonosFormulario.push(telefonoNuevo)
  }

  eliminarTelefono(index: number){
    this.telefonosFormulario.removeAt(index)
  }
}
