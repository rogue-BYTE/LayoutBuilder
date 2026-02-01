import { Component, ElementRef, ViewChild, OnInit, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { CdkDragDrop, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Item } from '../../models/widget.model';

@Component({
  selector: 'app-design-canvas',
  templateUrl: './design-canvas.component.html',
  styleUrls: ['./design-canvas.component.css']
})
export class DesignCanvasComponent implements OnInit, OnDestroy {
  @ViewChild('canvasArea') canvasArea!: ElementRef<HTMLDivElement>;

  items: Item[] = [];
  selId: string | null = null;
  private mPos = { x: 0, y: 0 };

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mPos = { x: event.clientX, y: event.clientY };
  }

  @HostListener('document:dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    this.mPos = { x: event.clientX, y: event.clientY };
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  handleDrop(event: CdkDragDrop<any, any>): void {
    if (event.previousContainer === event.container) return;

    const data = event.item.data;
    const canvas = this.canvasArea.nativeElement;
    const rect = canvas.getBoundingClientRect();
    
    const w = data.w || 100;
    const h = data.h || 50;
    
    let x = this.mPos.x - rect.left - w / 2;
    let y = this.mPos.y - rect.top - h / 2;
    
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + w > rect.width) x = rect.width - w;
    if (y + h > rect.height) y = rect.height - h;

    const newItem: Item = {
      id: 'item-' + Date.now(),
      type: data.type || 'unknown',
      name: data.name || 'Item',
      x: x,
      y: y,
      w: w,
      h: h,
      data: data.data
    };

    this.items.push(newItem);
    this.cdr.detectChanges();
  }

  updatePosition(item: Item, event: CdkDragEnd): void {
    item.x += event.distance.x;
    item.y += event.distance.y;
    
    if (item.x < 0) item.x = 0;
    if (item.y < 0) item.y = 0;
    
    this.cdr.detectChanges();
    event.source._dragRef.reset();
  }

  deleteItem(id: string): void {
    this.items = this.items.filter(i => i.id !== id);
    if (this.selId === id) {
      this.selId = null;
    }
  }

  selectItem(id: string): void {
    this.selId = id;
  }
}
