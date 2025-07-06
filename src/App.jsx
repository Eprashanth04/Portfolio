import { data } from "./data";
import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-accent mb-4">{title}</h2>
    <div>{children}</div>
  </section>
);

export default function App() {
  return (
    <div className="flex flex-col items-center px-4 pb-16 bg-gray-900 min-h-screen">
      <motion.div
        className="w-full max-w-3xl mt-10 bg-gray-800/90 rounded-2xl shadow-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center mb-8">
          <img
            src={data.photo}
            alt={data.name}
            className="w-32 h-32 rounded-full border-4 border-accent shadow-lg mx-auto md:mx-0 md:mr-8"
          />
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-4xl font-extrabold">{data.name}</h1>
            <p className="text-accent text-lg">{data.title}</p>
            <p className="mt-3 text-gray-300">{data.bio}</p>
            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
              {data.contact.email && (
                <a href={`mailto:${data.contact.email}`} className="hover:text-accent transition">Email</a>
              )}
              {data.contact.linkedin && (
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">LinkedIn</a>
              )}
              {data.contact.github && (
                <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">GitHub</a>
              )}
              {data.contact.website && (
                <a href={data.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Website</a>
              )}
              {data.contact.phone && (
                <span className="text-gray-400">{data.contact.phone}</span>
              )}
              {data.contact.location && (
                <span className="text-gray-400">{data.contact.location}</span>
              )}
            </div>
          </div>
        </div>
        {/* Skills */}
        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {data.skills.map(skill => (
              <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-lg text-sm">{skill}</span>
            ))}
          </div>
        </Section>
        {/* Experience */}
        <Section title="Experience">
          {data.experience.map(exp => (
            <div key={exp.company} className="mb-6">
              <div className="flex justify-between items-center">
                <span className="font-bold">{exp.role}</span>
                <span className="text-xs text-gray-400">{exp.duration}</span>
              </div>
              <div className="text-accent">{exp.company}</div>
              <ul className="list-disc list-inside ml-4 text-gray-300">
                {exp.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
        </Section>
        {/* Education */}
        <Section title="Education">
          {data.education.map(edu => (
            <div key={edu.school} className="mb-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">{edu.degree}</span>
                <span className="text-xs text-gray-400">{edu.duration}</span>
              </div>
              <div className="text-accent">{edu.school}</div>
              <ul className="list-disc list-inside ml-4 text-gray-300">
                {edu.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
        </Section>
        {/* Certifications */}
        {data.certifications.length > 0 && (
          <Section title="Certifications">
            <ul>
              {data.certifications.map(cert => (
                <li key={cert.name} className="mb-2">
                  <span className="font-semibold">{cert.name}</span> – {cert.issuer} ({cert.year})
                </li>
              ))}
            </ul>
          </Section>
        )}
        {/* Projects */}
        <Section title="Projects">
          <ul>
            {data.projects.map(proj => (
              <li key={proj.name} className="mb-2">
                <a
                  href={proj.link}
                  className="text-accent font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >{proj.name}</a>: {proj.description}
              </li>
            ))}
          </ul>
        </Section>
      </motion.div>
      <p className="mt-6 text-xs text-gray-600">
        &copy; {new Date().getFullYear()} {data.name} | Powered by React & Tailwind CSS
      </p>
    </div>
  );
}