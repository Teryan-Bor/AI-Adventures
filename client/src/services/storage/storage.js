const KEY = "book";

export const saveBook = (book) => {
  localStorage.setItem(KEY, JSON.stringify([book, ...getBooks()]));
}

export const getBooks = () => {
  try {
    const stored = localStorage.getItem(KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  } 
}

export const getBookById = (id) => {
  return getBooks().find((book) => book.id === id) ?? null;
}