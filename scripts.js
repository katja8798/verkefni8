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
    e.preventDefault();
    const spantxt = document.createTextNode(add());

    if (spantxt.length > 0){
      const el = document.getElementsByClassName("items")[0];
      const lina = document.createElement("li");
      lina.setAttribute("class", "item");
      el.appendChild(lina);

      const input = document.createElement('input');
      input.setAttribute('class', 'item__checkbox');
      input.setAttribute('type', 'checkbox');
      lina.appendChild(input);

      const span = document.createElement('span');
      span.setAttribute('class', 'item__text');
      span.appendChild(spantxt);
      lina.appendChild(span);

      const button = document.createElement('button');
      const buttontxt = document.createTextNode('Eyða');
      button.setAttribute('class', 'item__button');
      button.appendChild(buttontxt);
      lina.appendChild(button);
    }
    document.querySelector(".form__input").value="";
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    if (e.target.classList.contains("item__checkbox")) {
      e.target.parentNode.classList.toggle("item--done");
    }
  }
  

  // event handler fyrir það að breyta færslu
  function edit(e) {
    if (e.target.className === "item__text") {
      const txt = e.target.textContent;
      const txtinput = document.createElement("input");
      txtinput.focus();
      txtinput.classList.add("item__edit");
      txtinput.setAttribute("type", "text");
      txtinput.value = txt;
      e.target.parentNode.replaceChild(txtinput, e.target);
    }
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {

  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    const txt = document.querySelector(".form__input").value;
    const nyrInputTxt = txt.trim();
    return nyrInputTxt;
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
