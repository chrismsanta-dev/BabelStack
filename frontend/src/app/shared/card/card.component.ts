import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  imports: [MatButtonModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  public title = input<string>();
  public action = input<string>();
  public onActionClick = output();
}
