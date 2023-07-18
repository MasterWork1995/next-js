import { IPost } from '@/interfaces/IPost';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

const getAll = async () => {
  const { data } = await axios.get<IPost[]>('/posts');
  return data;
};

const getByID = async (id: string) => {
  const { data } = await axios.get<IPost>(`/posts/${id}`);
  return data;
};

export { getAll, getByID };
