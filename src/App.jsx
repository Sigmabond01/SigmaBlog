import { useRef, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import BlogList from "./blog/BlogList";
import BlogPost from "./blog/BlogPost";
import { Footer } from "./components/Footer";

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (!hasNavigated) {
      setHasNavigated(true);
      return;
    }

    const section = location.state?.scrollTo;

    if (section === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <div ref={aboutRef}><About /></div>
            <div ref={contactRef}><Contact /></div>
            <Footer />
          </>
        }
      />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
