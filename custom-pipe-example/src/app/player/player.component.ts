import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  palyers: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const resp = this.http.get('https://demo4690221.mockable.io/getPlayersHistory');
    resp.subscribe((data) => this.palyers = data);
  }
}
