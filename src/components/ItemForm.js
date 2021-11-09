import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({addItem}) {

  const [text, setText] = useState('')
  const [category, setCategory] = useState('Produce')

  function handleTextChange(event) {
    setText(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function clearForm() {
    setText('')
    setCategory('Produce')
  }

  function handleSubmit(event) {
    event.preventDefault()

    addItem({
      name: text,
      category: category,
      id: uuid()
    })

    clearForm()
  }

  return (
    <>
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleTextChange} value={text} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={category} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <input type="submit" value="Add to List" />
    </form>

    <button onClick={clearForm} type="button">Clear</button>

    </>
  );
}

export default ItemForm;

// fetch('localhost', {
//   method: "POST",
//   headers: {},
//   body: JSON.stringify({
//     name: text,
//     category: category
//   })
// })
// .then(res => res.json())
// .then(newItem => {
//   addItem(newItem)
// })
