import { FC, PropsWithChildren } from 'react';
import s from './container.module.scss';

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => <div className={s.container}>{children}</div>;

export default Container;
