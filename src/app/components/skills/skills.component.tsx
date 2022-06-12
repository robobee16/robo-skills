import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export const SkillsComponent = () => {
  return (
    <div className="skills-wrap">
      <div className="content">
        this is skills component
        <Link to="..">
          {' '}
          <Button>back to main ye </Button>
        </Link>
        <Link to="/skills/123">
          <Button>Skill Details</Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
