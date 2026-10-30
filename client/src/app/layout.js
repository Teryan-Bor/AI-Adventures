import { WeatherProvider } from "@/shared/WeatherContext/WeatherContext";
import "./global.css";
import Header from "./menu/header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: "black"}}>
        {/* <StageProvider> */}
          <WeatherProvider>
            <Header />
            {children}
          </WeatherProvider>
        {/* </StageProvider> */}
				
      </body>
    </html>
  );
}
