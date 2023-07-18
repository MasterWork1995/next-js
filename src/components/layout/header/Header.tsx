import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import s from './header.module.scss';
import Container from '../../container/Container';

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className={s.header}>
      <Container>
        <ul className={s.container}>
          <li className={`${s.item} ${pathname === '/' ? s.active : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${s.item} ${pathname === '/posts' ? s.active : ''}`}>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
