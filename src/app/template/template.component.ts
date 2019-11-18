import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  public showSearchBar = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.subscribeRouteUrlEvent();
  }

  public onUserInput(userInput: string) {
      console.log(`User want to search with these values : ${userInput}.`);
  }

  private subscribeRouteUrlEvent() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showSearchBar = (event.url === '/library');
      }
    });
  }
}
