import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import {CustomCursor} from "@components/CustomCursor";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
        {/*<CustomCursor />*/}
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
