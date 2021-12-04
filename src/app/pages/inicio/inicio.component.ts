import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  installEvent = null;

  constructor(private router: Router) { }

  ccursos(){
    //do your any operations
      this.router.navigate(['cursos']);
    }

  cdesarrollo(){
    //do your any operations
      this.router.navigate(['desarrollo']);
    }

  cmantenimiento(){
    //do your any operations
     this.router.navigate(['mantenimiento']);
    }

  cventamodulos(){
    //do your any operations
      this.router.navigate(['venta-modulos']);
    }


  ngOnInit(): void {
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event){
    console.log(event);
    event.preventDefault();
    this.installEvent= event;
  }

  installByUser() {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice
      .then(rta=>{
        console.log(rta);
      });
    }
  }

}
