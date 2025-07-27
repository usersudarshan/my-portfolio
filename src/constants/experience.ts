// src/constants/experience.ts

export interface ExperienceItem {
  company: string;
  title?: string;
  duration?: string;
  details: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "AFour Technologies Pvt. Ltd.",
    title: "Software Development Engineer",
    duration: "March 2021 – Present",
    details: [
      "Developed full-stack services using Node.js, React, and TypeScript; migrated services from AWS to Azure.",
      "Orchestrated cloud solutions using Kubernetes, Kafka, and Rancher.",
      "Enhanced testing frameworks with Jest, Pytest, and Enzyme.",
      "Designed DBT models, Snowflake pipelines, and SQL queries for analytics.",
    ],
  },
  {
    company: "Marchex (MC2)",
    details: [
      "Built scalable backend services in Node.js with TypeScript and Postgres.",
      "Migrated services from AWS to Azure (Azure Service Bus, Amazon SQS).",
      "Kubernetes orchestration and Redis caching.",
    ],
  },
  {
    company: "Convoy",
    details: [
      "Converted legacy JavaScript codebases to TypeScript and upgraded Node.js.",
      "Optimized DNS records and resolved vulnerabilities using Terraform.",
      "Migrated DBT models and embedded Metabase dashboards for analytics.",
    ],
  },
  {
    company: "Interview Management System (IMS)",
    details: [
      "Developed backend and frontend solutions using Node.js, React, and Postgres.",
      "Integrated Metabase dashboards and implemented robust unit tests.",
    ],
  },
];
