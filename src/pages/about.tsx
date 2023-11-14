import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo templateTitle='O klube' description='FC Tatran Presov' />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout min-h-main py-20'>
            <h2 data-fade='0'>O klube</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>FC Tatran Presov</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              <CloudinaryImg
                className='float-right ml-6 w-40 md:w-72'
                publicId='logoold'
                width='1500'
                height='1695'
                alt='Photo of me'
                preview={false}
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  FC Tatran Prešov je najstarší slovenský futbalový klub.
                  Momentálne posobí v 2.slovenskej futbalovej lige. Klub bol
                  zalozený v roku 1989. Medzi najväčšie úspechy klubu patrí 2.
                  miesto v 1. československej futbalovej lige v rokoch 1965 a
                  1973 a víťazstvo v Slovenskom pohári v roku 1992. Zeleno-bieli
                  štartovali niekoľkokrát aj v európskych pohároch (Pohár
                  Intertoto, PVP, Pohár UEFA, Stredoeurópsky pohár). V roku 1978
                  sa Tatran Prešov tešil zo zisku Rappanovho pohára. V roku 1981
                  sa stali zeleno-bieli víťazom Stredoeurópskeho pohára.
                </p>
                <p data-fade='4'></p>
                <p data-fade='5'>
                  Momentálne je mesto Prešov je opäť bližšie k výstavbe
                  futbalového štadióna. V marci 2023 zaradil Fond na podporu
                  športu prešovský futbalový štadión do „športovej
                  infraštruktúry národného významu“, čo by malo zabezpečiť plné
                  finančné krytie jeho výstavby. Na financovaní výstavby sa budú
                  podieľať aj mesto Prešov, Prešovský samosprávny kraj a
                  Slovenský futbalový zväz. V súčasnosti sa FC Tatran Prešov
                  usiluje o návrat do elitnej súťaže. Blízko k tomuto postupu
                  mal v sezóne 2022/2023. V II.lige sa klub umiestnil na druhom
                  mieste a stretol sa v baráži o postup do Fortuna Ligy proti FC
                  ViOn Zlaté Moravce. Domáci zápas na štadióne v Ličartovciach
                  vyhral 1:0 ale v odvete sa mu tento tesný náskok nepodarilo
                  udržať a prehral 3:0.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section>
          <div className='layout mt-16'>
            <h2>Vedenie</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <ul>
                <li>Luboš Michel - generálný manažér</li>
              </ul>
            </article>
          </div>
        </section>

        <section>
          <div className='layout py-6'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>Kontatkne udaje</p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
