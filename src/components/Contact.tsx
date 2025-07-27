import React from "react";
import { contact } from "../constants/contact";

const Contact: React.FC = () => (
  <section className="mb-8">
    <h2 className="text-xl text-orange-400 mb-4 font-bold">Contact</h2>
    <ul className="text-gray-200">
      <li>
        <span className="font-bold">Email:</span> {contact.email}
      </li>
      <li>
        <span className="font-bold">Location:</span> {contact.location}
      </li>
      <li>
        <span className="font-bold">LinkedIn:</span>
        <a
          href={contact.linkedin}
          className="text-orange-400 underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.linkedin}
        </a>
      </li>
      <li>
        <span className="font-bold">Git:</span>
        <a
          href={contact.git}
          className="text-orange-400 underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {contact.git}
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
