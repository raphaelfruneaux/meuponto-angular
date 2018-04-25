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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.todayEntry().subscribe(entry => {
      console.log(entry.pontos);
      if (entry.pontos.length > 0) {
        this.welcomeMsg = 'um ótimo dia de trabalho pra você.';
      } else {
        this.welcomeMsg = 'você ainda não registrou ponto hoje.';
      }
    });
  }

  ngOnDestroy() {
    console.log('destroy: sidebar');
  }

}
