import React from "react";

type Tab = "about" | "experience" | "education" | "contact";

interface TabsProps {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
}

const tabs: { key: Tab; label: string }[] = [
  { key: "about", label: "About" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "contact", label: "Contact" },
];

const Tabs: React.FC<TabsProps> = ({ currentTab, setCurrentTab }) => (
  <nav className="flex gap-4 mb-8">
    {tabs.map((tab) => (
      <button
        key={tab.key}
        onClick={() => setCurrentTab(tab.key)}
        className={`px-4 py-2 rounded ${
          currentTab === tab.key
            ? "bg-orange-400 text-white"
            : "bg-gray-700 text-gray-200 hover:bg-orange-500"
        } transition`}
      >
        {tab.label}
      </button>
    ))}
  </nav>
);

export default Tabs;
