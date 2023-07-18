import { FC, PropsWithChildren } from 'react';
import IMeta from './meta.interface';
import Head from 'next/head';

const getTitle = (title: string) => `${title} | Best Posts`;

const Meta: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={getTitle(title)} />
            <meta name="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
