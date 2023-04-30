import { Component,ChangeDetectionStrategy,Input,OnInit} from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  changeDetection:ChangeDetectionStrategy.Default,
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent {

  @Input()customer:Customer | undefined
  
  constructor() {
    console.log("GrandChildComponent:ConStructed");
  }

  ngOnChanges() {
    console.log("GrandChildComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("GrandChildComponent:ngOnInit");
  }


  ngDoCheck() {
    console.log("GrandChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("GrandChildComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("GrandChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("GrandChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("GrandChildComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("GrandChildComponent:ngOnDestroy");
  }

}
