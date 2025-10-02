import { memo } from 'react';
import styles from './styles.module.css'

type HeadingProps = {
    children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return (

      <h2 className={styles.heading}>{children}</h2>

  );
};

export default memo(Heading);