"use client";

import { getBooks } from "@/services/storage";
import { useEffect, useState } from "react"

const  Page = () => {
  const [books, setBooks] = useState([]);

  useEffect((prev) => {
    setBooks(...prev, getBooks())
  }, [])

  return (
    <>
      <h1>Stories</h1>
    </>
  )
}

export default Page