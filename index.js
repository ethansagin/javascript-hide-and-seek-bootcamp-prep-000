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
  var node = document.getElementById('grand-node').querySelector('div');
  for(i = 0; i < node.length; i++) {
    if(node[i].innerHTML
      current = current + ' div'
  }
  return document.querySelector(current)
}