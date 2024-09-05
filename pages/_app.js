import "@/styles/globals.css";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
import { Mulish } from "next/font/google";
const mulish = Mulish({
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <main className={mulish.className}>
        <Provider store={store}>
          <ThemeProvider>
            <Toaster />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </main>
    </SessionProvider>
  );
}
