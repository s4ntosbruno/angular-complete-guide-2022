import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers' ,
  selector: 'app-servers',
  standalone: true,
  imports: [CommonModule, ServerComponent, FormsModule],
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server> <app-server></app-server>`,
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'nenhum servido foi criado';
  serverName = '';
  serverCreated = false;
  servers = ['server de teste', 'server de teste'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `servidor foi criado! Seu nome é: ${this.serverName}`;
    this.servers.push(this.serverName);
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
