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
  welcomeMsg: string;

  maskEntry = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/];

  constructor(private userService: UserService) {
    this.welcomeMsg = 'um ótimo dia de trabalho pra você.';
  }

  ngOnInit() {
    this.userService.todayEntry().subscribe(entry => {
      console.log(entry);
      if (entry.pontos.length === 0) {
        this.welcomeMsg = 'você ainda não registrou ponto hoje.';
      }
    });
  }

  ngOnDestroy() {
    console.log('destroy: sidebar');
  }

}
