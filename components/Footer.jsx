export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--secondary)',
        borderTop: '1px solid var(--border)',
      }}
      className="mt-20"
    >
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="font-bold mb-2">Veenoth M</h3>
            <p style={{ color: 'var(--muted)' }} className="text-sm">
              Full-stack developer passionate about building scalable web applications.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition"
            >
              Twitter
            </a>
          </div>
        </div>

        <div
          className="border-t border-border mt-8 pt-8"
          style={{ borderColor: 'var(--border)' }}
        >
          <p style={{ color: 'var(--muted)' }} className="text-sm text-center">
            © 2025 Veenoth M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
