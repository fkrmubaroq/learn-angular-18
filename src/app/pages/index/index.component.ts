import { Component } from '@angular/core';

const listLearned = [
  {
    name: "Form",
    path: "/form"
  },
  {
    
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
