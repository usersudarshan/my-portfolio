import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Tabs from "./components/Tabs";

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<
    "about" | "experience" | "education" | "contact"
  >("about");

  return (
    <div className="flex min-h-screen  bg-[#000010]">
      <Sidebar />
      <main className="flex-1 bg-[#000019] px-12 py-10 overflow-y-auto">
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === "about" && <About />}
        {currentTab === "experience" && <Experience />}
        {currentTab === "education" && <Education />}
        {currentTab === "contact" && <Contact />}
      </main>
    </div>
  );
};

export default App;
