"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getBookById } from "@/services/storage";
import BookReader from "../components/BookReader/bookReader";
import "./singleBook.scss";

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setBook(getBookById(id));
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */

  }, [id]);

  return (
    <main className="reader-wrap">
      <Link className="reader-back" href="/adventures">
        ← My Adventures
      </Link>
      {!loaded && <p>Loading book...</p>}
      {loaded && !book && <p role="alert">Book not found in this browser.</p>}
      {loaded && book && (
        <BookReader key={book.id} title={book.title} pages={book.pages} />
      )}
    </main>
  );
}