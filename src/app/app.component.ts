import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log("STart");
        console.time('Navigation'); // Start timing when navigation begins
      }
      if (event instanceof NavigationEnd) {
        console.log("end");
        console.timeEnd('Navigation'); // End timing when navigation is complete
      }
    });
  }
}
