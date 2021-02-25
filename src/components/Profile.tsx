import React from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = React.useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ViniciusMazon.png" alt="Vinicius Mazon" />
      <div>
        <strong>Vinicius Mazon</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
