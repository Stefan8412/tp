import clsx from 'clsx';
import * as React from 'react';

import { sortByDate } from '@/lib/mdx.client';
import { getAllFilesFrontmatter } from '@/lib/mdx.server';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ProjectsPage(/* {
projects,
}: InferGetStaticPropsType<typeof getStaticProps> */) {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='Projects'
        description="Showcase of my projects on front-end development that I'm proud of."
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout py-12'>
            <h1 className='text-3xl md:text-5xl' data-fade='0'>
              <Accent>A-Tím</Accent>
            </h1>
            <p data-fade='1' className='mt-2 text-gray-600 dark:text-gray-300'>
              na tejto stránke sa pracuje
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = await getAllFilesFrontmatter('projects');
  const projects = sortByDate(files);

  return { props: { projects } };
}
