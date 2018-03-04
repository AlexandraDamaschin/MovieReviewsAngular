import { Component, OnInit } from '@angular/core';
import { StringList  } from '../../services/strings';

@Component({
  selector: 'app-push-to-db',
  templateUrl: './push-to-db.component.html',
  styleUrls: ['./push-to-db.component.css']
})
export class PushToDbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  callPost(){
      StringList.CUSTOM_API_BASE;
  }

}
