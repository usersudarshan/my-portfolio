import React from "react";
import { education } from "../constants/education";

const Education: React.FC = () => (
  <section className="mb-8">
    <h2 className="text-xl text-[#B89B2B] mb-4 font-bold">Education</h2>
    {education.map((ed, i) => (
      <div key={i} className="mb-4">
        <div className="font-semibold text-gray-200">{ed.degree}</div>
        <div className="text-[#B89B2B]">{ed.school}</div>
        <div className="text-gray-400 text-xs">
          {ed.date} | {ed.score}
        </div>
      </div>
    ))}
  </section>
);

export default Education;
