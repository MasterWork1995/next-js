import Layout from '@/components/layout/Layout';
import { IPostSingle } from '@/interfaces/IPost';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { getByID, getAll } from '@/services/posts';
import s from './posts.module.scss';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

const PostById: NextPage<IPostSingle> = ({ post }) => {
  const { back } = useRouter();

  const handleBackButton = () => back();
  return (
    <Layout title={post?.title}>
      {post ? (
        <div className={s.postContainer}>
          <h3 className={s.title}>{post.title}</h3>
          <p className={s.description}>{post.description}</p>
          <button className={s.button} onClick={handleBackButton}>
            Go back
          </button>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getAll();
  return {
    paths: posts.map((post) => ({
      params: { id: String(post.id) }
    })),
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps<IPostSingle> = async ({ params }) => {
  const post = await getByID(String(params?.id));

  return {
    props: { post },
    revalidate: 60
  };
};

export default PostById;
