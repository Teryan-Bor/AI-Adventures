"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBooks } from "@/services/storage";
import "./adventures.scss";
import { BookCard } from "./components/bookCard/BookCard";

export default function AdventuresPage() {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setBooks(getBooks());
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  return (
    <main className="stories-container">
      <div className="background-wrap">
        <div className="stories-top">
          <div>
            <p className="stories-eyebrow">YOUR LIBRARY</p>
            <h1>My Adventures</h1>
            <p>Stories saved in this browser.</p>
          </div>
          <Link className="stories-action" href="/create">
            + Create Adventure
          </Link>
        </div>
        {!loaded && <p>Loading books...</p>}
        {loaded && books.length === 0 && (
          <div className="story-empty">
            No adventures yet. Create your first story!
          </div>
        )}
        <div className="story-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </main>
  );
}
