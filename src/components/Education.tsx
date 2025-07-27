import React from "react";
import { education } from "../constants/education";

const Education: React.FC = () => (
  <section className="mb-8">
    <h2 className="text-xl text-orange-400 mb-4 font-bold">Education</h2>
    {education.map((ed, i) => (
      <div key={i} className="mb-4">
        <div className="font-semibold text-gray-200">{ed.degree}</div>
        <div className="text-orange-300">{ed.school}</div>
        <div className="text-gray-400 text-xs">
          {ed.date} | {ed.score}
        </div>
      </div>
    ))}
  </section>
);

export default Education;
