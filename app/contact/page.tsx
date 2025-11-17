import { sanityFetch } from '@/lib/sanity.client';
import { CONTACT_INFO_QUERY } from '@/lib/queries';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';

export const revalidate = 60;

export default async function ContactPage() {
  const contactInfo = await sanityFetch({ query: CONTACT_INFO_QUERY });

  return (
    <Layout>
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p style={{ color: 'var(--muted)' }} className="text-lg mb-12">
          Have a project or question? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo?.email && (
                <div>
                  <p style={{ color: 'var(--muted)' }} className="text-sm mb-1">
                    Email
                  </p>
                  <a href={`mailto:${contactInfo.email}`} className="text-accent">
                    {contactInfo.email}
                  </a>
                </div>
              )}
              {contactInfo?.location && (
                <div>
                  <p style={{ color: 'var(--muted)' }} className="text-sm mb-1">
                    Location
                  </p>
                  <p>{contactInfo.location}</p>
                </div>
              )}
              {contactInfo?.github && (
                <div>
                  <p style={{ color: 'var(--muted)' }} className="text-sm mb-1">
                    GitHub
                  </p>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent"
                  >
                    {contactInfo.github}
                  </a>
                </div>
              )}
              {contactInfo?.linkedin && (
                <div>
                  <p style={{ color: 'var(--muted)' }} className="text-sm mb-1">
                    LinkedIn
                  </p>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent"
                  >
                    {contactInfo.linkedin}
                  </a>
                </div>
              )}
            </div>
          </div>

          {contactInfo?.enableContactForm && <ContactForm />}
        </div>
      </div>
    </Layout>
  );
}
