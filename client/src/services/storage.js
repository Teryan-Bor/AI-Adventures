export const saveBook = (book) => {
  localStorage.setItem("book", JSON.stringify([book, ...getBooks()]));
}

export const getBooks = () => {
  const stored = localStorage.getItem("book")
  const books = JSON.parse(stored);
  return books;
}

export const getBookById = (id) => {
  return getBooks().find((book) => book.id === id) ?? null;
}