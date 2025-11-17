import { sanityFetch } from '@/lib/sanity.client';
import { SKILLS_QUERY, PROJECTS_QUERY, EXPERIENCE_QUERY } from '@/lib/queries';
import Layout from '@/components/Layout';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';

export const revalidate = 60;

export default async function Home() {
  const [skills, projects, experience] = await Promise.all([
    sanityFetch({ query: SKILLS_QUERY }),
    sanityFetch({ query: PROJECTS_QUERY }),
    sanityFetch({ query: EXPERIENCE_QUERY }),
  ]);

  return (
    <Layout>
      <div className="container py-20">
        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills?.map((category) => (
              <SkillCard key={category._id} category={category} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {experience?.map((exp) => (
              <ExperienceCard key={exp._id} experience={exp} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
