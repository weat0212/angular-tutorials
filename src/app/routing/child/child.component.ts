import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goTo(where: string) {
    if (where === 'parent-sibling') {
      this.router.navigate(['../../' + where], {relativeTo: this.route})
    }
    if (where === 'parent') {
      this.router.navigate(['../../' + where], {relativeTo: this.route})
    }
  }
}
