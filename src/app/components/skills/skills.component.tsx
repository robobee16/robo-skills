import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export const SkillsComponent = () => {
  return (
    <div>
      this is skills component
      <Button>
        <Link to="..">back to main ye</Link>
      </Button>
      <Button>
        <Link to="/skills/123">Skill Details</Link>
      </Button>
      <Outlet />
    </div>
  );
};
