import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toast } from '../../services/toast.service';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';

@Component({
  selector: 'query-params-page',
  standalone: true,
  imports: [TextareaComponent],
  templateUrl: './query-params.component.html',
  styles: ``,
})
export class QueryParamsComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  textParams = '';
  constructor() {
    this.textParams = JSON.stringify(this.route.snapshot.queryParams);
  }

  onChange(event: Event) {
    try {
      this.textParams = (event.target as HTMLTextAreaElement).value;
      this.router.navigate([], {
        queryParams: JSON.parse(this.textParams),
      });
    } catch (error:any) {
      console.error(error);
      toast(error.message)      
    }
  }
}
