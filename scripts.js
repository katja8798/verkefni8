const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    // TODO láta hluti í _items virka
    _items.addEventListener('click', (e)=> {
      finish(e);
      edit(e);
      commit(e);
      add(e);
      deleteItem(e);
    })
  }

  function formHandler(e) {
    /* e.preventDefault();

    console.log('halló heimur');*/

    e.preventDefault();
    const spantxt = document.createTextNode(add());

    if (spantxt.length > 0){
      const element = document.getElementsByClassName("items")[0];
      const lina = document.createElement("li");
      lina.setAttribute("class", "item");
      element.appendChild(line);

    }
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    if (e.target.classList.contains("item__checkbox")) {
      e.target.parentNode.classList.toggle("item--done");
    }
  }
  

  // event handler fyrir það að breyta færslu
  function edit(e) {

  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {

  }

  // fall sem sér um að bæta við nýju item
  function add(value) {

  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    if (e.target.classList.contains("item__button")) {
      e.target.parentNode.remove();
    }
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
