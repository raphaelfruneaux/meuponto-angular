import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../user/user.service';
import { DayEntry } from '../day-entry/day-entry.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  todayEntry: Observable<DayEntry>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.todayEntry = this.userService.todayEntry();
  }

  ngOnDestroy() {
    console.log('destroy: sidebar');
  }

}
