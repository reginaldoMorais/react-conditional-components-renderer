import React, { ReactElement } from 'react';
import { ISwitch, ICase } from './types';

const Switch = (props: ISwitch): ReactElement | null => {
  const child = props.children.find(
    (child: ReactElement<ICase>): ReactElement | null => {
      return child.props.identifier === props.case ? child : null;
    }
  );

  return child ? child : props.default;
};

export default Switch;
