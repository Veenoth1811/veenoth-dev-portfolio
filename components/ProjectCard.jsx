import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';

export default function ProjectCard({ project }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--secondary)',
        borderColor: 'var(--border)',
      }}
      className="border rounded-lg overflow-hidden hover:border-accent transition"
    >
      {project.image && (
        <div className="relative h-48 bg-border">
          <Image
            src={urlFor(project.image).url() || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p style={{ color: 'var(--muted)' }} className="text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack?.map((tech, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: 'var(--border)',
                color: 'var(--foreground)',
              }}
              className="px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
