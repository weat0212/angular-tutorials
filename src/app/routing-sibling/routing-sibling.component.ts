import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-routing-sibling',
  templateUrl: './routing-sibling.component.html',
  styleUrls: ['./routing-sibling.component.css']
})
export class RoutingSiblingComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goTo(where: string) {
    if (where === 'child') {
      this.router.navigate(['../parent/' + where], {relativeTo: this.route})
    }
    if (where === 'parent') {
      this.router.navigate(['../' + where], {relativeTo: this.route})
    }
  }
}
