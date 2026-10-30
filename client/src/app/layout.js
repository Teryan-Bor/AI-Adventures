import "./global.css";
import Header from "./menu/header/Header";
import { StageProvider } from "./shared/StageContext/StageContext";
import { WeatherProvider } from "./shared/WeatherContext/WeatherContext";

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
