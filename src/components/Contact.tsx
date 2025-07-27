import React, { JSX } from "react";
import { contact } from "../constants/contact";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Map icon string to MUI icon components
const iconMap: Record<string, JSX.Element> = {
  Email: <EmailIcon className="inline text-[#B89B2B] mr-2" fontSize="small" />,
  LocationOn: (
    <LocationOnIcon className="inline text-green-400 mr-2" fontSize="small" />
  ),
  LinkedIn: (
    <LinkedInIcon className="inline text-blue-500 mr-2" fontSize="small" />
  ),
  GitHub: <GitHubIcon className="inline text-gray-400 mr-2" fontSize="small" />,
};

const Contact: React.FC = () => (
  <section id="contact" className="mb-8">
    <h2 className="text-xl text-[#B89B2B] mb-4 font-bold">Contact</h2>
    <ul className="text-gray-200">
      {contact.map((item, idx) => (
        <li className="mb-2 flex items-center" key={idx}>
          {item.icon && iconMap[item.icon]}
          {item.url ? (
            <a
              href={item.url}
              className="text-[#B89B2B] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.value}
            </a>
          ) : (
            <span>{item.value}</span>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default Contact;
