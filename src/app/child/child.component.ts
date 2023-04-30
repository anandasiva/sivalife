
import { Component,Input,OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection:ChangeDetectionStrategy.Default,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message:string | undefined;
  customer:Customer = new Customer();

  constructor() {
    console.log("  ChildComponent:Constructed");
  }

  ngOnChanges() {
    console.log("  ChildComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("  ChildComponent:ngOnInit");
  }

  ngDoCheck() {
    console.log("  ChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("  ChildComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("  ChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("  ChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("  ChildComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("  ChildComponent:ngOnDestroy");
  }

}
