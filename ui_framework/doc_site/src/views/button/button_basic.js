import React from 'react';

import {
  KuiButton,
} from '../../../../components';

export default () => (
  <div>
    <KuiButton
      type="basic"
      onClick={() => window.alert('Button clicked')}
    >
      Basic button
    </KuiButton>

    <br />

    <KuiButton
      type="basic"
      onClick={() => window.alert('Button clicked')}
      disabled
    >
      Basic button, disabled
    </KuiButton>
  </div>
);
