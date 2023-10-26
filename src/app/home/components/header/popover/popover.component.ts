import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})

export class PopoverComponent  implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}


}