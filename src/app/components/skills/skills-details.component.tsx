import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import styles from './skills-details.module.scss';
export const SkillsDetailsComponent = () => {
  console.log('gaga------------------123123-------------------', styles);
  return (
    <div className={styles.skillDetailsWrap}>
      this is skills details component
      <Link to="..">
        <Button className={styles.red}>back to skills </Button>
      </Link>
      <Link to="/">
        <Button>back to main </Button>
      </Link>
    </div>
  );
};
