import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/registro';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistroService } from 'src/app/services/registro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  agregar: Registro = {
    nombre: '',
    ape_m: '',
    ape_p: '',
    email: '',
    password: '',
    telefono: '',
  };

  registro;

  constructor(private formB: FormBuilder, private regSer: RegistroService, private toastrSvc: ToastrService) {
    this.registro = formB.group({
      nombre: ['', Validators.required],
      ape_m: ['', Validators.required],
      ape_p: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      telefono: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
    })
   }

  ngOnInit(): void {
  }

  Registrar(){
    const {nombre, ape_m, ape_p, email, password, telefono} = this.registro.value;
    this.regSer.registrarUsuario(nombre, ape_m, ape_p, email, password, telefono).subscribe(res=>console.log(res));
    this.toastrSvc.success(`Registrado correctamente`, 'UTVCO TECHNOLOGY');
    
    this.registro.reset();
  }

}
