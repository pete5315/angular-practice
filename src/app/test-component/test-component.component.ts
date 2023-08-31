import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {
  showData($event: any) {
    console.log("button is clicked!"); if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  userName:string = "Peter";
  list = [1,2,3,4,5];

}

