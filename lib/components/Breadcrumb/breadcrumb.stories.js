import React from 'react';
import { storiesOf } from '@storybook/react';

import {Breadcrumb, Crumbs} from './';

storiesOf('Breadcrumb', module)
  .add('Default', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Default Breadcrumb</h3>
        <h4>
          A default breadcrumb with slashes.
        </h4>
        <div className="demo">
          <Breadcrumb>
            <Crumbs url="#" label="Home" />
            <Crumbs url="#" label="Activities" />
            <Crumbs url="#" label="Bangalore" />
            <Crumbs url="#" label="Thing to do in Bangalore" active={true}/>
          </Breadcrumb>
        </div>
      </div>
    </div>
  ))