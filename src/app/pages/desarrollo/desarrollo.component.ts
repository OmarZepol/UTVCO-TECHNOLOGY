import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit {

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
