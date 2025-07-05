import { Component } from '@angular/core';

const listLearned = [
  {
    name: "Form",
    path: "/form"
  },
  {
    name: "input & output",
    path: "/input-output"
  }
]

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styles: ``
})
export class IndexComponent {
  listLearned = listLearned;
}
