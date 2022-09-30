// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  // definir formulario
  myForm: FormGroup = new FormGroup({}) ;

  // inyectar clase formBuilder
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // iniciamos los campos del form y valores por defecto
    this.myForm = this.fb.group({
      nombre: '',
      apellido: '',
      email: '',
      tel: '',
      direccion: ''
    });

    // subscribir a los cambios del form

    this.myForm.valueChanges.subscribe(console.log)

  }
}
