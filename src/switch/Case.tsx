import React, { ReactElement } from 'react';
import { ICase } from './types';

const Case = ({ children }: ICase): ReactElement<ICase> => {
  return <div>{children}</div>;
};

export default Case;
