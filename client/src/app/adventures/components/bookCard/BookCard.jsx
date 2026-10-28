import Link from "next/link";

export const BookCard = ({ book }) => {
  return (
    <Link className="story-card" href={`/book/${book.id}`}>
      <span className="story-card-icon">📖</span>
      <span>
        <strong>{book.title}</strong>
        <small>
          {book.character_name} · {book.page_count} pages · {book.mood}
        </small>
      </span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}