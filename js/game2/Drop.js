const piecesElem = document.querySelectorAll('#piece');
const dropSpaces = document.querySelectorAll('.dropSpace');
console.log(piecesElem);

piecesElem.forEach(el => {
  el.addEventListener('dragstart', dragStartHandler);
  el.addEventListener('dragend', dragEndHandler);
})

dropSpaces.forEach(el => {
  el.addEventListener('dragenter', dragEnterHandler);
  el.addEventListener('dragover', dragOverHandler);
  el.addEventListener('dragleave', dragLeaveHandler);
  el.addEventListener('drop', dropHandler);
})

function dragStartHandler(e) {
  e.dataTransfer.setData('text', e.target.innerText);
  e.target.style = 'background-color: red; width: "30px"; height: "30px";';
}
function dragEndHandler(e) {
  e.target.style = 'background-color: black; color: white;';
}

function dragOverHandler(e) {
  e.preventDefault();
}

function dragEnterHandler(e) {
  e.target.style = 'border: 2px dashed gray; background: brown';
}
function dragLeaveHandler(e) {
  e.target.style = 'border: none; background: #abcdef';
}

function dropHandler(e) {
  e.preventDefault();
  dragLeaveHandler(e);
  e.preventDefault();

  const sourceElemData = e.dataTransfer.getData('text');
  console.log(sourceElemData);
  e.target.innerText = sourceElemData;
}