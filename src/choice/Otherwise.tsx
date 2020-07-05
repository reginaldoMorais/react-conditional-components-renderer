import React, { ReactElement } from 'react';
import { IOtherwise } from './types';

const Otherwise = ({ children }: IOtherwise): ReactElement<IOtherwise> => {
  return <div>{children}</div>;
};

export default Otherwise;
