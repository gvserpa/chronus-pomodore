import { memo } from 'react';
import styles from './styles.module.css'
import { TimerIcon } from 'lucide-react';



const Logo = () => {
  return (

      <div className={styles.logo}>
        <a className={styles.logoLink} href='#'>
          <TimerIcon />
          <span>Chronus</span>
        </a>
      </div>
      
  );
};

export default memo(Logo);