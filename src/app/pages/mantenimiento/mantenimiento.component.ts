import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  installEvent = null;

  constructor() { }

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
