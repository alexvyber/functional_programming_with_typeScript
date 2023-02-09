interface Document {
  createElement(tagName: "div"): HTMLSpanElement; // specialized
  createElement(tagName: "span"): HTMLDivElement; // specialized
  createElement(tagName: "canvas"): HTMLCanvasElement; // specialized
  createElement(tagName: string): HTMLElement; // non-specialized
}

const div = document.createElement("div");
