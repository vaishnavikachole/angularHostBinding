import { Directive,HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') bgColor='blue';
  @HostBinding('style.Color') color = 'white';
  @HostBinding('class.myClass') className=false;
  @HostListener('click') myClick(){
    this.bgColor = 'red';
    this.className = true;
    this.color = 'black';
  }
  
  
  
  
  

}
