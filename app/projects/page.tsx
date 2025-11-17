import { sanityFetch } from '@/lib/sanity.client';
import { PROJECTS_QUERY } from '@/lib/queries';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await sanityFetch({ query: PROJECTS_QUERY });

  return (
    <Layout>
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-4">All Projects</h1>
        <p style={{ color: 'var(--muted)' }} className="text-lg mb-12">
          Explore my portfolio of web development projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
