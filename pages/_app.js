import "@/styles/globals.css";
// internal imports
import { TrackingProvider } from "../context/Tracking";
export default function App({ Component, pageProps }) {
  return(
  <>
    <TrackingProvider>
      <Component {...pageProps} />
    </TrackingProvider>
  </>
  );
}
