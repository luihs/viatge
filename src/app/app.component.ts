import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viatge';

  public ngOnInit(){
    $('#list-home a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  }

}
