import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider";
import { Footer } from "./sections/Footer/Footer";
import { Header } from "./sections/Header/Header";
import { Hi } from "./sections/Hi/Hi";

function App() {
  const { theme, colors } = useContext(ThemeContext);

  return (
    <div className={`App ${theme ? "orange" : "teal"}`}>
      <Header />
      <main>
        <Hi />
      </main>
      <Footer />
    </div>
  );
}

export default App;
