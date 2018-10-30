import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('cockpitServerCreated') serverCreated = new EventEmitter<{serverName,serverContent}>();
  @Output('cockpitBlueprintAdded') blueprintAdded = new EventEmitter<{serverName,serverContent}>();
  serverName="Test Server";
  serverContent="Some content...";
  @ViewChild('serverContentInput') serverContentInput;

  constructor() { }

  ngOnInit() {
  }

  // createServer(){
  //   this.serverCreated.emit({
  //     serverName: this.serverName,
  //     serverContent: this.serverContent
  //   })
  // }
  createServer(el: HTMLInputElement){
    console.log(el)
      this.serverCreated.emit({
        serverName: el.value,
        serverContent: this.serverContentInput.nativeElement.value
      })
    }

  addBlueprint(){
    this.blueprintAdded.emit({
      serverName: this.serverName,
      serverContent: this.serverContent
    })
  }



}
