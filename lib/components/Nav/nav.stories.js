import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs';

import {NavItem, NavList} from './';


storiesOf('Nav', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => {
   
    return (
      <div className="cont storybook">
        <div className="block">
          <h3>Nav component</h3>
          <h4>
            Default view of Nav bar
         </h4>
          <div className="demo">
            <NavList>
                <NavItem active={true}>Flights</NavItem>
                <NavItem>Hotels</NavItem>
                <NavItem>Activities</NavItem>
            </NavList>
          </div>
        </div>
      </div>
    )
  })