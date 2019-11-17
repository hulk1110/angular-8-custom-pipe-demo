import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const resp = this.http.get('https://demo4690221.mockable.io/getActivities');
    resp.subscribe((data) => this.activities = data);
  }

}
