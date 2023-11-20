import clsx from 'clsx';
import * as React from 'react';

import { sortByDate } from '@/lib/mdx.client';
import { getAllFilesFrontmatter } from '@/lib/mdx.server';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import ProfileCard from '@/components/content/ateam/ProfileCard';
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
              na stránke sa pracuje
            </p>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              <ProfileCard
                name='Marek Petrus'
                position='tréner'
                club1='Slovakia'
              />
              <ProfileCard
                name='Erik Havrila'
                position='asistent'
                club1='Slovakia'
              />
              <ProfileCard
                name='Jozef Dolný'
                position='útočník'
                club1='Slovakia'
              />
              <ProfileCard
                name='Martin Baran'
                position='obranca'
                club1='Slovakia'
              />
              <ProfileCard
                name='Boris Gáll'
                position='záložník'
                club1='Slovakia'
              />
              <ProfileCard
                name='Maksym Kuchynskyi'
                position='brankár'
                club1='Ukraine'
              />
            </div>
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
