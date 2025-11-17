export default function SkillCard({ category }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--secondary)',
        borderColor: 'var(--border)',
      }}
      className="border rounded-lg p-6"
    >
      <h3 className="font-semibold mb-4 text-lg">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills?.map((skill) => (
          <span
            key={skill._id}
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--secondary)',
            }}
            className="px-3 py-1 rounded text-sm font-medium"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
