import React from "react";
import { sidebar } from "../constants/sidebar";

const Sidebar: React.FC = () => (
  <aside className="flex flex-col items-center bg-gray-800 w-80 min-h-screen py-10 text-gray-100">
    <div className="w-28 h-28 rounded-full bg-gray-600 flex items-center justify-center mb-6 overflow-hidden">
      {sidebar.avatarUrl ? (
        <img
          src={sidebar.avatarUrl}
          alt={sidebar.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-5xl">{sidebar.avatarEmoji}</span>
      )}
    </div>
    <h1 className="text-2xl font-bold mb-1 text-center">{sidebar.name}</h1>
    <p className="text-orange-300 mb-2 text-center">{sidebar.title}</p>
    <p className="text-sm text-gray-400 text-center mb-6">{sidebar.tagline}</p>
    <ul className="text-sm space-y-2 w-full px-6">
      {sidebar.labels.map((item, idx) => (
        <li key={idx}>
          <span className="font-bold text-gray-300">{item.label}:</span>{" "}
          {item.url ? (
            <a
              href={item.url}
              className="text-orange-400 underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.value}
            </a>
          ) : (
            item.value
          )}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
