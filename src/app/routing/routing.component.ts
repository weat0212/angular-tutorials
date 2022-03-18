import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goTo(where: string) {
    if (where === 'child') {
      this.router.navigate(['./' + where], {relativeTo: this.route})
    }
    if (where === 'parent-sibling') {
      this.router.navigate(['../' + where], {relativeTo: this.route})
    }
  }
}
