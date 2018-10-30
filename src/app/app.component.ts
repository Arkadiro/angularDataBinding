import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = [];
  newServerName = '';
  newServerContent = '';
  

  onAddServer(data) {
    this.state.push({
      type: 'server',
      id: this.getId(),
      name: data.serverName,
      content: data.serverContent
    });
  }

  onAddBlueprint(data) {
    this.state.push({
      type: 'blueprint',
      id: this.getId(),
      name: data.serverName,
      content: data.serverContent
    });
  }

  getId(){
    const id = Math.floor(Math.random()*10)+1+'abc'
    return id;
  }
  deleteItem(){
    this.state.splice(0,1);
  }
}
