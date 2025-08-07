import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
const listLearned = [
  {
    name: "Form",
    path: "/form"
  },
  {
    name: "input & output",
    path: "/input-output"
  },
  {
    name: "QueryParams",
    path: "/query-params"
  },
]

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.component.html',
  styles: ``
})
export class IndexComponent {
  listLearned = listLearned;
}
