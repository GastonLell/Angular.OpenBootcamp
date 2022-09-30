import { Component, Input, OnInit } from '@angular/core';
import { IRandomContact } from 'src/app/models/interfaces/RandomUser.interface';
@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {
  @Input() randomContact: IRandomContact | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
