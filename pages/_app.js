import { store } from "@/store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  );
}
