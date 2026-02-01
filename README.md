# Layout Builder Assignment

This application is a drag-and-drop layout builder created using Angular.

## Architectural Decisions

- Framework: Angular was chosen for its structured component-based architecture and strong typing.
- Drag and Drop: Angular CDK (Component Dev Kit) is used for the core drag-and-drop mechanics to ensure cross-browser compatibility and smooth interactions.
- Data Model: A generic 'Item' interface is used to represent all draggable elements (cards, text, buttons, etc.), simplifying the state management.
- Component Structure:
  - WidgetPalette: Manages the source list of available items.
  - DesignCanvas: Acts as the drop target and renders the active layout.
  - CanvasWidget: Handles the rendering and behaviors (like resizing and deleting) of individual items on the canvas.
- No External CSS Libraries: Styling is custom-written to maintain full control over the look and feel.

## How to Run

1. Open your terminal and navigate to the project directory.
2. Install the necessary dependencies by running:
   npm install

3. Start the development server by running:
   ng serve

4. Open your browser and navigate to http://localhost:4200/ to view the application.
