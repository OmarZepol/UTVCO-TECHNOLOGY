import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitud } from '../../models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  agregar: Solicitud = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    descripcion: '',
  };

  solicitud;

  constructor(private formB: FormBuilder, private regSer: SolicitudService,  private toastrSvc:ToastrService) {
    this.solicitud = formB.group({
      nombre: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      telefono: ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      asunto: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
   };

  ngOnInit(): void {
  }

  Agregar(){
    
    const {nombre, email, telefono, asunto, descripcion} = this.solicitud.value;
    this.regSer.registrarSolicutud(nombre,email,telefono,asunto,descripcion).subscribe(res=>console.log(res));
    this.toastrSvc.success(`Enviado correctamente`, 'UTVCO TECHNOLOGY');

    this.solicitud.reset();
  }


};
