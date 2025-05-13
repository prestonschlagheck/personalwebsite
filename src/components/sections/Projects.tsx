'use client';

import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "Description of your first project",
    image: "/placeholder.jpg",
    link: "#",
  },
  {
    title: "Project 2",
    description: "Description of your second project",
    image: "/placeholder.jpg",
    link: "#",
  },
  {
    title: "Project 3",
    description: "Description of your third project",
    image: "/placeholder.jpg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-4 bg-neutral-900">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700 shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-neutral-800" />
              <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                Project Image
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neutral-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-white text-neutral-900 rounded-lg transition-all duration-300 hover:bg-neutral-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Contact Info Below Projects */}
        <div className="mt-16 border-t border-neutral-800 pt-8 text-center">
          <p className="text-xs text-neutral-400">
            Contact: <a href="tel:9593330277" className="underline">959-333-0277</a> &nbsp;|&nbsp;
            <a href="mailto:prestonschlagheck@gmail.com" className="underline">prestonschlagheck@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
} 