import React from 'react';
import { storiesOf } from '@storybook/react';

import {LineClamp, ReadMore} from './'

storiesOf('ReadMore', module)
  .add('Line clamp', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Line clamp</h3>
        <h4>
          Truncating HTML to 4 lines
        </h4>
        <div className="demo">
          <LineClamp
            className="fs-body-2"
          >
            <p className="m-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa
            <strong>strong</strong>. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque
            eu, pretium quis, sem. Nulla consequat massa quis
            enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum
            felis eu pede <a class="external ext" href="#">link</a>
            mollis pretium. Integer tincidunt. Cras dapibus.
            Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante,
            dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa
            <strong>strong</strong>. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque
            eu, pretium quis, sem. Nulla consequat massa quis
            enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum
            felis eu pede <a class="external ext" href="#">link</a>
            mollis pretium. Integer tincidunt. Cras dapibus.
            Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante,
            dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi.</p>
            </LineClamp>
        </div>
      </div>
    </div>
  ))
 
  .add('Read more', () => (
    <div className="cont storybook">
      <div className="block">
        <h3>Read more</h3>
        <h4>
          Truncating text to character count
        </h4>
        <div className="demo">
          <ReadMore
            className="fs-body-2"
            charLength={200}
          >
            Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque
            eu, pretium quis, sem. Nulla consequat massa quis
            enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum.
            Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque
            eu, pretium quis, sem. Nulla consequat massa quis
            enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum
            </ReadMore>
        </div>
      </div>
    </div>
  ))
 
  