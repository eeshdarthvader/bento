import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text } from '@storybook/addon-knobs';

import ViewMore from './';

storiesOf('ViewMore', module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add('Default', () => {
        return (
            <div className="cont storybook">
                <div className="block">
                    <h3>View more</h3>
                    <h4>
                        Toggle between view more and view less
                    </h4>
                    <div className="demo">
                        <li>List 1</li>
                        <li>List 2</li>
                        <li>List 3</li>
                        <ViewMore>
                            <li>List 4</li>
                            <li>List 5</li>
                        </ViewMore>
                    </div>
                </div>
            </div>
        )
    })
