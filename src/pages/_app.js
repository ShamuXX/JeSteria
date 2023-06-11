import "../styles/globals.css";
import { ContextAuthProvider } from "../context/AuthContext";

function App({ Component, pageProps }) {
  return (
    <ContextAuthProvider>
      <Component {...pageProps} />;
    </ContextAuthProvider>
  );
}

export default App;
