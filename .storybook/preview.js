import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => <div className="ax-theme--day">{storyFn()}</div>);
