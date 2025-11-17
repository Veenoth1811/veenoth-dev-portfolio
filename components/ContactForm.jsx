'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{
              backgroundColor: 'var(--secondary)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{
              backgroundColor: 'var(--secondary)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{
              backgroundColor: 'var(--secondary)',
              borderColor: 'var(--border)',
              color: 'var(--foreground)',
            }}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:border-accent resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            backgroundColor: isLoading ? 'var(--border)' : 'var(--accent)',
            color: 'var(--secondary)',
          }}
          className="w-full font-semibold py-2 rounded hover:opacity-90 transition disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

        {message && (
          <p
            style={{
              color: message.includes('success') ? '#10b981' : '#ef4444',
            }}
            className="text-sm text-center"
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
