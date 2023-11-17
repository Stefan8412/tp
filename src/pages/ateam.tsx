import clsx from 'clsx';
import * as React from 'react';

import { sortByDate } from '@/lib/mdx.client';
import { getAllFilesFrontmatter } from '@/lib/mdx.server';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';
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
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              <div className='mx-auto my-12 w-full items-center justify-center overflow-hidden rounded-lg bg-white pb-6 shadow-sm md:max-w-sm'>
                <div className='relative h-20'>
                  <CloudinaryImg
                    className='absolute h-full w-full object-cover'
                    publicId='ultraspresov'
                    height='400'
                    width='400'
                    alt='bla'
                  />
                </div>
                <div className='relative -my-12 mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow'>
                  <CloudinaryImg
                    className='h-full w-full object-cover'
                    publicId='logoold'
                    height='400'
                    width='400'
                    alt='bla'
                  />
                </div>
                <div className='mt-16'>
                  <h1 className='text-center text-lg font-semibold'>
                    Marek Petruš-tréner
                  </h1>
                  <p className='text-center text-sm text-gray-600'>
                    Predchádzajúce kluby
                  </p>
                </div>
                <div className='mx-6 mt-6 flex flex-wrap border-t pt-3'>
                  <div className='my-1 mr-2 cursor-default border border-indigo-600 px-2 text-xs uppercase tracking-wider text-indigo-600 hover:bg-indigo-600 hover:text-indigo-100'>
                    Zemplin Michalovce
                  </div>

                  <div className='my-1 mr-2 cursor-default border border-indigo-600 px-2 text-xs uppercase tracking-wider text-indigo-600 hover:bg-indigo-600 hover:text-indigo-100'>
                    Liptovský Mikuláš
                  </div>
                </div>
              </div>
              <div className='mx-auto my-12 w-full items-center justify-center overflow-hidden rounded-lg bg-white pb-6 shadow-sm md:max-w-sm'>
                <div className='relative h-20'>
                  <CloudinaryImg
                    className='absolute h-full w-full object-cover'
                    publicId='ultraspresov'
                    height='400'
                    width='400'
                    alt='bla'
                  />
                </div>
                <div className='relative -my-12 mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow'>
                  <CloudinaryImg
                    className='h-full w-full object-cover'
                    publicId='logoold'
                    height='400'
                    width='400'
                    alt='bla'
                  />
                </div>
                <div className='mt-16'>
                  <h1 className='text-center text-lg font-semibold'>
                    Erik Havrila-asistent trénera
                  </h1>
                  <p className='text-center text-sm text-gray-600'></p>
                </div>
                <div className='mx-6 mt-6 flex flex-wrap border-t pt-3'></div>
              </div>
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
