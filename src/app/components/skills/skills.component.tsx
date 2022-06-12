import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export const SkillsComponent = () => {
  return (
    <div>
      this is skills component
      <Button>
        <Link to="/">back to main</Link>
      </Button>
    </div>
  );
};
