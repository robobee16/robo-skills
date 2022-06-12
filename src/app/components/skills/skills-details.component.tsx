import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export const SkillsDetailsComponent = () => {
  return (
    <div>
      this is skills details component
      <Button>
        <Link to="..">back to main</Link>
      </Button>
    </div>
  );
};
