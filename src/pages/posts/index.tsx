import Layout from '@/components/layout/Layout';
import { IPosts } from '@/interfaces/IPost';
import { GetServerSideProps, NextPage, GetStaticProps } from 'next';
import { getAll } from '@/services/posts';
import s from './posts.module.scss';
import { useRouter } from 'next/router';

const Posts: NextPage<IPosts> = ({ posts }) => {
  const { push, pathname } = useRouter();
  const handleClick = (id: string) => {
    push(`${pathname}/${id}`);
  };

  return (
    <Layout title="Posts Page">
      <div className={s.wrapper}>
        {posts ? (
          posts.map(({ id, title, description }) => {
            return (
              <div key={id} className={s.postsContainer}>
                <h3 className={s.title}>{title}</h3>
                <p className={s.description}>{description}</p>
                <button className={s.button} onClick={() => handleClick(id)}>
                  Go to post
                </button>
              </div>
            );
          })
        ) : (
          <p>Posts not found</p>
        )}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IPosts> = async () => {
  const posts = await getAll();

  return {
    props: { posts },
    revalidate: 60
  };
};

// export const getServerSideProps: GetServerSideProps<IPosts> = async () => {
//   const posts = await getAll();

//   return {
//     props: { posts }
//   };
// };

export default Posts;
