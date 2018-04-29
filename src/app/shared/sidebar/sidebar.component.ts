import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../user/user.service';
import { DayEntry } from '../day-entry/day-entry.interface';
import { Observable } from 'rxjs/Observable';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({
          transform: 'translateX(-5%)',
          opacity: 0
        }),
        animate('600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          transform: 'translateX(100%)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  todayEntry: Observable<DayEntry>;
  welcomeMsg: string;
  state: string;

  maskEntry = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/];

  constructor(private userService: UserService) {
    this.welcomeMsg = 'um ótimo dia de trabalho pra você.';
    this.state = 'in';
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
    this.state = 'out';
  }

}
