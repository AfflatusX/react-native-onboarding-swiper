import React from 'react';

import TextButton from './TextButton';
import { BUTTON_SIZE, MARGIN_RIGHT, getDefaultStyle } from './util';

const NextButton = ({ buttonStyles, nextLabel, isLight, ...rest }) => (
  <TextButton
    size={BUTTON_SIZE}
    style={[{ marginRight: MARGIN_RIGHT }, buttonStyles]}
    textStyle={getDefaultStyle(isLight)}
    {...rest}
  >
    {nextLabel}
  </TextButton>
);

export default NextButton;
