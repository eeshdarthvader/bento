import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import {Breadcrumb, Crumbs} from './';

storiesOf('Breadcrumb', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
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
            <Crumbs label="Things to do in Bangalore"/>
          </Breadcrumb>
        </div>
      </div>
    </div>
  ))