import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutBuilderComponent } from './layout-builder.component';
import { WidgetPaletteComponent } from './widget-palette/widget-palette.component';
import { DesignCanvasComponent } from './design-canvas/design-canvas.component';
import { CanvasWidgetComponent } from './canvas-widget/canvas-widget.component';



@NgModule({
  declarations: [
    LayoutBuilderComponent,
    WidgetPaletteComponent,
    DesignCanvasComponent,
    CanvasWidgetComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    LayoutBuilderComponent
  ]
})
export class LayoutBuilderModule { }
