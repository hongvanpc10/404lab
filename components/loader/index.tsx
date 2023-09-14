'use client';

import { useEffect } from 'react';
import styles from './loader.module.css';

export default function Loader() {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className={styles.loader}></div>
    </div>
  );
}
