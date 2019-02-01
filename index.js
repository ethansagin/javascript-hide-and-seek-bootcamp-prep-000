function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.getElementById('nested').getElementsByClassName('target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
}
}

function deepestChild() {
  var current = 'div #grand-node';
  while(document.querySelector(current) !== undefined) {
    current = current + ' div'
  }
  return document.querySelector(current)
}