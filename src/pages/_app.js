import "@/styles/globals.css";
import { DocumentProvider } from "@/contexts/DocumentProvider";

export default function App({ Component, pageProps }) {
  return (
    <DocumentProvider>
      <Component {...pageProps} />
    </DocumentProvider>
  );
}
