import { Component,ChangeDetectionStrategy,VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection:ChangeDetectionStrategy.Default,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sivalife';
  message="ANANDA";
  content="SIVA";
  hideChild=false;
  name = "Angular " + VERSION.major;
  constructor() {
    console.log("AppComponent:Constructed");
  }

  ngOnChanges() {
    console.log("AppComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }

}
