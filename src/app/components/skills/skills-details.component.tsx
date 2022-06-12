import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import styles from './skills-details.component.scss';
export const SkillsDetailsComponent = () => {
  console.log('gaga-------------------------------------', styles);
  return (
    <div className="">
      this is skills details component
      <Link to="..">
        <Button>back to skills </Button>
      </Link>
      <Link to="/">
        <Button>back to main </Button>
      </Link>
    </div>
  );
};
