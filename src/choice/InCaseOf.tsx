import React, { ReactElement } from 'react';
import { IInCaseOf } from './types';

const InCaseOf = ({ children }: IInCaseOf): ReactElement<IInCaseOf> => {
  return <div>{children}</div>;
};

export default InCaseOf;
