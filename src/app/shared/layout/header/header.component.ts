import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  @Input() id: string = ""
  @Input() title: string = ""
}
