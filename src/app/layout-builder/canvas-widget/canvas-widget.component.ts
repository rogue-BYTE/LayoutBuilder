import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/widget.model';

@Component({
  selector: 'app-canvas-widget',
  templateUrl: './canvas-widget.component.html',
  styleUrls: ['./canvas-widget.component.css']
})
export class CanvasWidgetComponent {
  @Input() item!: Item;
  @Output() remove = new EventEmitter<string>();
  @Output() resize = new EventEmitter<{ id: string; w: number; h: number }>();

  private resizing = false;
  private startX = 0;
  private startY = 0;
  private startW = 0;
  private startH = 0;

  onRemove(event: MouseEvent): void {
    event.stopPropagation();
    this.remove.emit(this.item.id);
  }

  onResizeStart(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    
    this.resizing = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startW = this.item.w;
    this.startH = this.item.h;

    const onMouseMove = (e: MouseEvent) => {
      if (!this.resizing) return;
      
      const dx = e.clientX - this.startX;
      const dy = e.clientY - this.startY;
      
      this.item.w = Math.max(80, this.startW + dx);
      this.item.h = Math.max(50, this.startH + dy);
    };

    const onMouseUp = () => {
      this.resizing = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      
      this.resize.emit({
        id: this.item.id,
        w: this.item.w,
        h: this.item.h
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
}
