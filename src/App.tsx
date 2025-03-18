import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MarkdownViewer from "./components/MarkdownViewer";
import NotFound from "./components/NotFound";
import About from "./components/About";

function App() {
  const [markdownText, setMarkdownText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              markdownText={markdownText} 
              setMarkdownText={setMarkdownText}
              toggleTheme={toggleTheme}
              isDarkMode={darkMode}
            />
          } 
        />
        <Route 
          path="/viewer" 
          element={
            <MarkdownViewer 
              markdownText={markdownText} 
              toggleTheme={toggleTheme} 
              isDarkMode={darkMode} 
            />
          } 
        />
        <Route 
          path="/viewer/:id" 
          element={
            <MarkdownViewer 
              markdownText={markdownText} 
              toggleTheme={toggleTheme} 
              isDarkMode={darkMode} 
            />
          } 
        />
        <Route 
          path="/about" 
          element={<About />} 
        />
        <Route 
          path="*" 
          element={<NotFound />} 
        />
      </Routes>
    </Router>
  );
}

export default App;