import React from "react";
import { experiences } from "../constants/experience";

const Experience: React.FC = () => (
  <section className="mb-8">
    <h2 className="text-xl text-[#B89B2B] mb-4 font-bold">Experience</h2>
    {experiences.map((job, idx) => (
      <div key={idx} className="mb-6">
        <div className="font-bold text-lg text-white">{job.company}</div>
        {job.title && <div className="text-[#B89B2B]">{job.title}</div>}
        {job.duration && (
          <div className="text-gray-500 text-xs">{job.duration}</div>
        )}
        <ul className="list-disc ml-6 text-gray-300 mt-2">
          {job.details.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Experience;
