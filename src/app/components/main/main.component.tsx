import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export const MainComponent = () => {
  return (
    <div>
      this is main component test
      <Link to="/skills">
        <Button>Skills</Button>
      </Link>
    </div>
  );
};
