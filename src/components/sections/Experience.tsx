'use client';

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Madison Country Club",
    location: "Madison, Connecticut",
    roles: [
      {
        title: "Member Services Associate",
        date: "May 2025 - Present",
        details: [
          "Process $10,000+ in daily transactions through club POS, including green fees, member charges, and invoices.",
          "Manage and schedule over 80 member tee times per day, optimizing course flow and availability.",
          "Serve as first point of contact for 500+ members, ensuring accurate check-ins and resolving issues."
        ]
      },
      {
        title: "Outside Operations Assistant",
        date: "Apr 2022 - May 2025",
        details: [
          "Planned and coordinated 14+ major tournaments and social events annually, directing staff to meet deadlines.",
          "Assisted with event registrations, merchandise sales, and membership inquiries.",
          "Oversaw 100+ daily tee times and maintained a fleet of 50 golf carts."
        ]
      }
    ]
  },
  {
    company: "Guilford Fund For Education",
    location: "Guilford, Connecticut",
    roles: [
      {
        title: "Web Developer (Internship)",
        date: "Oct 2021 - Present",
        details: [
          "Developed 30+ web pages and provided ongoing website maintenance.",
          "Assisted sponsor recruitment, securing and retaining 40+ sponsors.",
          "Managed email campaigns reaching 750+ subscribers."
        ]
      }
    ]
  },
  {
    company: "Trinity Institute for Applied Neuroscience & Spirituality",
    location: "New Haven, Connecticut",
    roles: [
      {
        title: "Summer Research Intern",
        date: "Jun 2021 - Aug 2021",
        details: [
          "Designed and structured the organization's website for accessibility and engagement.",
          "Analyzed 10 academic studies and created visuals to enhance analysis.",
          "Collaborated with researchers to source and format scholarly documents."
        ]
      }
    ]
  },
  {
    company: "Sigma Phi Epsilon (SC Alpha)",
    location: "University of South Carolina",
    roles: [
      {
        title: "ACE Chair",
        date: "Mar 2025 - Present",
        details: ["Lead academic and community engagement initiatives."]
      },
      {
        title: "Mental Health Chair",
        date: "Jan 2025 - Present",
        details: ["Coordinate mental health awareness and support programs."]
      },
      {
        title: "Graphic & Apparel Design Chair",
        date: "Nov 2024 - Present",
        details: ["Design chapter graphics and apparel for events and recruitment."]
      }
    ]
  },
  {
    company: "Alpha Kappa Psi - Beta Upsilon",
    location: "University of South Carolina",
    roles: [
      {
        title: "Member",
        date: "Apr 2025 - Present",
        details: ["Active member of the professional business fraternity."]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-16 px-4 bg-black border-t border-neutral-800">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-white text-center"
        >
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex flex-col mb-2">
                <span className="text-xl font-semibold text-white">{exp.company}</span>
                <span className="text-xs text-neutral-500 mt-1">{exp.location}</span>
              </div>
              <div className="space-y-2 mt-2">
                {exp.roles.map((role, j) => (
                  <div key={role.title} className="flex flex-col gap-0.5 mb-2">
                    <div className="flex flex-row items-center justify-between w-full">
                      <span className="font-medium text-neutral-200 text-base">{role.title}</span>
                      <span className="text-xs text-neutral-400 ml-2 whitespace-nowrap">{role.date}</span>
                    </div>
                    <ul className="list-disc list-inside text-neutral-400 text-sm mt-1 space-y-1">
                      {role.details.map((d, k) => (
                        <li key={k}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 