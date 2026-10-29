import HTMLFlipBook from "react-pageflip";
import "../../[id]/singleBook.scss";
import { forwardRef, useRef, useState } from "react";

const Page = forwardRef(({ children, number, density }, ref) => (
  <div ref={ref} className="book-page" data-density={density}>
    <div className="book-page-inner">
      <div className="book-page-content">{children}</div>
      {number && <span className="book-page-number">{number}</span>}
    </div>
  </div>
));

Page.displayName = "Page";

const BookReader = ({ title, pages }) => {
  const bookRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const content = pages.length % 2 === 0 ? pages : [...pages, ""];

  return (
    <article className="reader-book">
      <h1 className="reader-book-title">{title}</h1>

      <div className="book-wrap">
        <HTMLFlipBook
          ref={bookRef}
          width={400}
          height={540}
          showCover={true}
          maxShadowOPacity={0.5}
          flippingTime={700}
          onFlip={(e) => setCurrent(e.data)}
        >
          <Page density="hard">
            <div className="book-cover">
              <h2>{title}</h2>
            </div>
          </Page>

          {content.map((text, i) => (
            <Page key={i} number={text ? i + 1 : null}>
              {text
                .split("\n")
                .filter(Boolean)
                .map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
            </Page>
          ))}

          <Page density="hard">
            <div className="book-cover">
              <h2>The End</h2>
            </div>
          </Page>
        </HTMLFlipBook>
      </div>

      <div className="reader-controls">
        <button onClick={() => bookRef.current.pageFlip().flipPrev()}>
          ← Previous
        </button>
        <button onClick={() => bookRef.current.pageFlip().flipNext()}>
          Next →
        </button>
      </div>
    </article>
  );
};

export default BookReader
