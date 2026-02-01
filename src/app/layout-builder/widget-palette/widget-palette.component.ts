import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-palette',
  templateUrl: './widget-palette.component.html',
  styleUrls: ['./widget-palette.component.css']
})
export class WidgetPaletteComponent {
  q = '';

  list = [
    { type: 'card', name: 'Card', w: 320, h: 220, icon: 'crop_square' },
    { type: 'text', name: 'Text', w: 250, h: 100, icon: 'text_fields' },
    { type: 'button', name: 'Button', w: 140, h: 80, icon: 'smart_button' }
  ];

  get getData() {
    if (!this.q.trim()) return this.list;
    return this.list.filter(item => 
      item.name.toLowerCase().includes(this.q.toLowerCase())
    );
  }
}
