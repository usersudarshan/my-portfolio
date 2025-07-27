import React from "react";
import { hardSkills, softSkills } from "../constants/skills";
import { aboutMe } from "../constants/about";

const About: React.FC = () => (
  <section className="mb-8">
    <h2 className="text-xl text-orange-400 mb-4 font-bold">About Me</h2>
    <p className="mb-4 text-gray-200">{aboutMe}</p>
    <div className="mb-4">
      <h3 className="font-semibold text-orange-300 mb-1">Hard Skills</h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {hardSkills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-700 text-orange-200 px-2 py-1 rounded text-xs border border-orange-400"
          >
            {skill}
          </span>
        ))}
      </div>
      <h3 className="font-semibold text-orange-300 mb-1">Soft Skills</h3>
      <div className="flex flex-wrap gap-2">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-700 text-orange-200 px-2 py-1 rounded text-xs border border-orange-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default About;
