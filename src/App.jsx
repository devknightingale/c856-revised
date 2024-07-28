import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Stay from "./components/Stay/Stay";
import Dining from "./components/Dining/Dining";
import Events from "./components/Events/Events";
// ... import other pages

function App() {
  return (
    <Router>
      <div className={styles.layout}>
        <Navbar />

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/events" element={<Events />} />
          {/* ... other routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
