import { Component } from '@angular/core';
import { Widget } from '../../models/widget.model';

@Component({
  selector: 'app-widget-palette',
  templateUrl: './widget-palette.component.html',
  styleUrls: ['./widget-palette.component.css']
})
export class WidgetPaletteComponent {

  availableWidgets: Partial<Widget>[] = [
    { type: 'text', label: 'Text Input', width: 200, height: 60 },
    { type: 'button', label: 'Button', width: 100, height: 40 },
    { type: 'card', label: 'Card', width: 300, height: 200 },
    { type: 'chart', label: 'Chart', width: 400, height: 300 }
  ];

}
