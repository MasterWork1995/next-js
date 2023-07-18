import Layout from '@/components/layout/Layout';
import { NextPage } from 'next';
import s from './notFound.module.scss';
import Image from 'next/image';

const NotFound: NextPage = () => {
  return (
    <Layout title="Not Found Page">
      <div className={s.container}>
        <Image src="/notFound.png" alt="Not Found" width={900} height={600} />
      </div>
    </Layout>
  );
};

export default NotFound;
