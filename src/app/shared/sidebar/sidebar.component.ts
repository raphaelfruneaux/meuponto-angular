import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { DayEntry } from '../day-entry/day-entry.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  todayEntry: DayEntry;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.todayEntry().subscribe(entry => {
      this.todayEntry = entry;
      console.log(this.todayEntry);
    });
  }

}
