import { loadPiece } from "./main.js";

export function dragStartHandler(e) {
  e.dataTransfer.setData('data', e.target.id);
  e.target.style = 'opacity: 0.3;';
}

export function dragEndHandler(e) {
  e.target.style = 'opacity: none;';
  e.target.style = 'border: none';
}

// export function dragEnterHandler(e) {
// }

export function dragOverHandler(e) {
  e.preventDefault();
  e.target.style = 'border: 2px dashed white;';
}

export function dragLeaveHandler(e) {
  e.target.style = 'border: none;';
}

export function dropHandler(e) {
  e.preventDefault();
  dragLeaveHandler(e);
  e.preventDefault();

  let sourceElemData = e.dataTransfer.getData('data');
  let sourceElemId = document.getElementById(sourceElemData);
  this.appendChild(sourceElemId);
  sourceElemId.style = 'opacity: none;';

  loadPiece();
}