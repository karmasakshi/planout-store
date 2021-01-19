import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'planout-store-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public userId: number = 0;

  constructor(
    private userService: UserService
  ) { }

  public ngOnInit(): void {

    this.userService.userId$.subscribe(

      (userId: number) => { this.userId = userId; }

    );

  }

}
