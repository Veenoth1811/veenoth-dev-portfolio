import { sanityFetch } from '@/lib/sanity.client';
import { EXPERIENCE_QUERY } from '@/lib/queries';
import Layout from '@/components/Layout';
import ExperienceCard from '@/components/ExperienceCard';

export const revalidate = 60;

export default async function ExperiencePage() {
  const experience = await sanityFetch({ query: EXPERIENCE_QUERY });

  return (
    <Layout>
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <p style={{ color: 'var(--muted)' }} className="text-lg mb-12">
          My professional journey and internship experience
        </p>

        <div className="max-w-2xl mx-auto space-y-6">
          {experience?.map((exp) => (
            <ExperienceCard key={exp._id} experience={exp} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
