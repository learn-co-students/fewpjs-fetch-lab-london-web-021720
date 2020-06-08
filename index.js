const main = document.querySelector('main')

const fetchBooks = () => {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(books => renderBooks(books))
}

const renderBooks = (json) => {
  json.forEach(book => renderBook(book))
}

const renderBook = book => {
  const h2 = document.createElement('h2')
  h2.innerText = book.name
  main.appendChild(h2)
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks()
})
