export default function ExperienceCard({ experience }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--secondary)',
        borderColor: 'var(--border)',
        borderLeftColor: 'var(--accent)',
      }}
      className="border-l-4 border rounded-lg p-6"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <div>
          <h3 className="font-semibold text-lg">{experience.role}</h3>
          <p style={{ color: 'var(--muted)' }} className="text-sm">
            {experience.company}
          </p>
        </div>
        <span style={{ color: 'var(--muted)' }} className="text-sm whitespace-nowrap">
          {experience.duration}
        </span>
      </div>

      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <ul className="space-y-2">
          {experience.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex gap-3 text-sm">
              <span style={{ color: 'var(--accent)' }}>•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
