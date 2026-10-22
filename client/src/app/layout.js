import "./global.css";
import Header from "./menu/header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
				<Header />
        {children}
      </body>
    </html>
  );
}
