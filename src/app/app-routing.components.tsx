import React from 'react';
import { useRoutes } from 'react-router-dom';
import { NotFound } from '@app/shared/component/not-found';
import { MainComponent } from '@components/main/main.component';
import { SkillsComponent } from '@components/skills/skills.component';
import { SkillsDetailsComponent } from '@components/skills/skills-details.component';

export const AppRoutingComponent = (): React.ReactElement | null => {
  return useRoutes([
    {
      path: '',
      element: <MainComponent />,
    },
    {
      path: 'skills',
      element: <SkillsComponent />,
      children: [
        {
          path: ':skillId',
          index: true,
          element: <SkillsDetailsComponent />,
        },
      ],
    },

    /*
     * default component
     * */
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
};
