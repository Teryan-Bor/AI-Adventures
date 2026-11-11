import "./global.css";

import { WeatherProvider } from "@/shared/WeatherContext/WeatherContext";
import Header from "./menu/header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: "black"}}>
          <WeatherProvider>
            <Header />
            {children}
          </WeatherProvider>
      </body>
    </html>
  );
}
