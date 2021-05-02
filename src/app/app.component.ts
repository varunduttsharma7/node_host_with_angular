import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App Component';
  bool = true;
  constructor(private readonly http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('api/todos/1')
      .subscribe(console.log);

    this.http.post('api/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }).subscribe(res => console.log(res));
  }
}
