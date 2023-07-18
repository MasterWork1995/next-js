import { FC } from 'react';
import Container from '@/components/container/Container';
import s from './footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={s.container}>
      <Container>
        <p>Extella Group &copy; 2023</p>
      </Container>
    </div>
  );
};

export default Footer;
