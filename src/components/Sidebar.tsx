import React, { JSX } from "react";
import { sidebar } from "../constants/sidebar";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Map the icon string to the Material UI icon component
const iconMap: Record<string, JSX.Element> = {
  Email: <EmailIcon className="inline text-[#B89B2B] mr-1" fontSize="small" />,
  LocationOn: (
    <LocationOnIcon className="inline text-green-400 mr-1" fontSize="small" />
  ),
  LinkedIn: (
    <LinkedInIcon className="inline text-blue-500 mr-1" fontSize="small" />
  ),
  GitHub: <GitHubIcon className="inline text-gray-400 mr-1" fontSize="small" />,
};

const Sidebar: React.FC = () => (
  <aside className="flex flex-col items-center bg-[#00005] w-80 min-h-screen py-10 text-gray-100">
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
    <p className="text-[#B89B2B] mb-2 text-center">{sidebar.title}</p>
    <p className="text-sm text-gray-400 text-center mb-6">{sidebar.tagline}</p>
    <ul className="text-sm space-y-2 w-full px-6">
      {sidebar.labels.map((item, idx) => (
        <li key={idx}>
          {item.icon && iconMap[item.icon]}
          {item.url ? (
            <a
              href={item.url}
              className="text-[#B89B2B] underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.value}
            </a>
          ) : (
            <span className="ml-1">{item.value}</span>
          )}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
