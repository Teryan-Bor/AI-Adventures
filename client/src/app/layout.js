import "./global.css";
import Header from "./menu/header/Header";
import { StageProvider } from "./shared/StageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StageProvider> 
          <Header />
          {children}
        </StageProvider>
				
      </body>
    </html>
  );
}
