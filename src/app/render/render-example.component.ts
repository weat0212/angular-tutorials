import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-render-example',
  templateUrl: './render-example.component.html',
  styleUrls: ['./render-example.component.css']
})
export class RenderExampleComponent implements AfterViewInit {

  @ViewChild('demoDiv')
  demoDiv!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    console.log('DIV的id：' + this.demoDiv.nativeElement.id)
    ; // DIV的id：demoDiv
    this.renderer.setStyle(this.demoDiv.nativeElement, 'background-color', 'red');
    // 通過Renderer2設定div的css樣式background-color
  }

}
