import { Component, ViewChild} from '@angular/core';
import { TestDirective } from './test.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angularHostBinding';

  @ViewChild(TestDirective)
  mydir: TestDirective = new TestDirective();

  changeColor(){
    this.mydir.myClick()
  }
}
