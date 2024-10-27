import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(`key code: ${event.keyCode}`);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <>piyo</>;
}

export default App;
