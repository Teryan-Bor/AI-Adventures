export function saveBook(book) {
  localStorage.setItem("book", JSON.stringify([book, ...getBooks()]));
}

export function getBooks() {
  const stored = localStorage.getItem("book")
  const books = JSON.parse(stored);
  return books;
}

export function getBookById(id) {
  return getBooks().find((book) => book.id === id) ?? null;
}