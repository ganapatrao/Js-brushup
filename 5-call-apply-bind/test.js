import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <div *ngIf="data">
      <h1>{{ data.title }}</h1>
      <p>{{ data.description }}</p>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.data = this.route.snapshot.data['dashboardData'];  // Access resolved data
    console.log(this.data);
  }
}
