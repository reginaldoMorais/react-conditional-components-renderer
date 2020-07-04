import { ReactElement } from 'react';

export interface ICase {
  identifier: string | number;
  children: ReactElement;
}

export interface ISwitch {
  case: string | number | object;
  default: ReactElement;
  children: ReactElement<ICase>[];
}
