import { Observable } from 'rxjs/Rx';

const parent = document.getElementById('parent');
const widget = document.getElementById('widget');

const mouseDowns = Observable.fromEvent(widget, 'mousedown');
const parentMouseMoves = Observable.fromEvent(parent, 'mousemove');
const parentMouseUps = Observable.fromEvent(parent, 'mouseup');

const drags =
  mouseDowns
    .map(() => parentMouseMoves.takeUntil(parentMouseUps))
    .concatAll();

drags.forEach(e => {
  widget.style.left = `${e.clientX}px`;
  widget.style.top = `${e.clientY}px`;
});
