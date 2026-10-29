import "./global.css";
import Header from "./menu/header/Header";
import { StageProvider } from "./shared/StageContext/StageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: "black"}}>
        <StageProvider> 
          <Header />
          {children}
        </StageProvider>
				
      </body>
    </html>
  );
}
