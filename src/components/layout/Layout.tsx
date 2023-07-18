import { FC, PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import { Oswald } from 'next/font/google';
import Header from '@/components/layout/header/Header';
import Container from '@/components/container/Container';
import Meta from '@/components/seo/Meta';
import IMeta from '@/components/seo/meta.interface';
import Footer from './footer/Footer';

// const DynamicFooter = dynamic(() => import('@/components/layout/footer/Footer'), { ssr: false }); only client load
const font = Oswald({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <div className={font.className}>
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </div>
    </Meta>
  );
};

export default Layout;
