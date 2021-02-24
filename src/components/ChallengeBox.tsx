import React from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = React.useContext(
    ChallengesContext
  );

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />

            <strong>Novo desafio</strong>

            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um novo desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios.
          </p>
        </div>
      )}
    </div>
  );
}
