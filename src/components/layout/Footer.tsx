import * as React from 'react';
import { FiMail } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { SiFacebook } from 'react-icons/si';

import { trackEvent } from '@/lib/analytics';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import Accent from '@/components/Accent';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

import TechStack from '../TechStack';

export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
        <TechStack />

        <p className='mt-12 font-medium text-gray-600 dark:text-gray-300'>
          Kontakty
        </p>
        <SocialLinks />

        <p className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
          © Tatran Presov {new Date().getFullYear()}
          {/* {feedbackFlag && (
            <>
              {' • '}
              <FeedbackFish
                projectId={process.env.NEXT_PUBLIC_FEEDBACK_FISH_ID || ''}
              >
                <button className='rounded-sm hover:text-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:hover:text-gray-100'>
                  Got any feedback?
                </button>
              </FeedbackFish>
            </>
          )} */}
        </p>
      </main>
    </footer>
  );
}

/* function FooterLinks() {
  return (
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
      {footerLinks.map(({ href, text, tooltip }) => (
        <Tooltip interactive={false} key={href} tipChildren={tooltip}>
          <UnstyledLink
            className='animated-underline rounded-sm text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-gray-200'
            href={href}
            onClick={() => {
              trackEvent(`Footer Link: ${text}`, { type: 'link' });
            }}
          >
            {text}
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
} */

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle');

  const [copy] = useCopyToClipboard();

  return (
    <div className='mt-2 flex space-x-4'>
      <div className='flex items-center justify-center'>
        <Tooltip
          trigger='mouseenter'
          hideOnClick={false}
          interactive
          html={
            <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
              {copyStatus === 'idle'
                ? 'Skopírujte mail kliknutím na logo'
                : 'Skopírované 🥳'}
              <Accent className='inline-block font-medium'>
                stefan@hancar.sk
              </Accent>
            </div>
          }
        >
          <button
            onClick={() => {
              copy('stefan@hancar.sk').then(() => {
                setCopyStatus('copied');
                setTimeout(() => setCopyStatus('idle'), 1500);
              });
            }}
            className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          >
            <FiMail className='h-7 w-7 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </button>
        </Tooltip>
      </div>
      {socials.map((social) => (
        <Tooltip
          interactive={false}
          key={social.href}
          tipChildren={social.text}
        >
          <UnstyledLink
            className='inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
            href={social.href}
            onClick={() => {
              trackEvent(`Footer Link: ${social.id}`, { type: 'link' });
            }}
          >
            <social.icon className='my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

/* const footerLinks: { href: string; text: string; tooltip: React.ReactNode }[] =
  [
    {
      href: 'https://clarence.link/um',
      text: 'Analytics',
      tooltip: 'theodorusclarence.com views and visitors analytics',
    },
    {
      href: '/statistics',
      text: 'Statistics',
      tooltip: 'Blog, Projects, and Library Statistics',
    },
    {
      href: '/guestbook',
      text: 'Guestbook',
      tooltip:
        'Leave whatever you like to say—message, appreciation, suggestions',
    },
    {
      href: '/subscribe',
      text: 'Subscribe',
      tooltip: 'Get an email whenever I post, no spam',
    },
    {
      href: 'https://theodorusclarence.com/rss.xml',
      text: 'RSS',
      tooltip: 'Add theodorusclarence.com blog to your feeds',
    },
  ]; */

type Social = {
  href: string;
  icon: IconType;
  id: string;
  text: React.ReactNode;
};
const socials: Social[] = [
  {
    href: 'https://www.facebook.com/fctatran/',
    icon: SiFacebook,
    id: 'Facebook',
    text: (
      <>
        Kontaktujte nás na <Accent className='font-medium'>Facebooku</Accent>
      </>
    ),
  },
];
