import { Component } from '@angular/core';
import { User } from './models/user'

const USERS:User[] = [
  {
    id: 1,
    name: 'Helen Nguyen',
    age: 25,
    email: "example1@gmail.com"
  },
  {
    id: 2,
    name: 'Maria Kovler',
    age: 26,
    email: "example2@gmail.com"
  },
  {
    id: 3,
    name: 'Nurit Cohen',
    age: 27,
    email: "example3@gmail.com"
  },
  {
    id: 4,
    name: 'Kobi Naim',
    age: 29,
    email: "example4@gmail.com"
  }
];

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{title}}</h1>
            <ul class="users">
                <li *ngFor="let eachUser of users"
                 [class.selected]="eachUser === selectedUser"
                 (click)="onSelect(eachUser)"
                >
                    <span class="badge">{{eachUser.id}}</span> {{eachUser.name}}
                </li>                
            </ul>
            <!--When selectedUser is not NULL, it come to that div-->
            <user-detail [selectedUser]="selectedUser"></user-detail>                      
`,
  styles: [`
    .selected {
      background-color: red !important;
      color: white;
    }
    .users {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .users li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 1px;
    }
    .users li.selected:hover {
      background-color: red !important;
      color: white;
    }
    .users li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .users .text {
      position: relative;
      top: -3px;
    }
    .users .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: green;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 1px 0 0 1px;
    }`]
})
export class AppComponent  {
  title = 'Angular Tutorial. This is a list of users';
  users = USERS;
  selectedUser:User;
  onSelect(myUser:User):void {
    this.selectedUser = myUser;
  }

  user:User = {
      id: 1,
      name: 'Nguyen Duc Hoang',
      age: 30,
      email: "sunlight4d@gmail.com"
  }
}
