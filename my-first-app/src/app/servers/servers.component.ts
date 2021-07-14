import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "no server"
  serverName: string = "inital Name";
  serverCreated: boolean = false;
  servers = ['TestServer 1', 'Test Server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000)
  }

  onUpdateServerEvent(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "server " + this.serverName + " was created";
  }
  ngOnInit(): void {
  }

}
