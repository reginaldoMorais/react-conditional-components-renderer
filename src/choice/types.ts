import { ReactElement } from 'react';

export interface IOtherwise {
  children: ReactElement;
}

export interface IInCaseOf {
  test: boolean;
  children: ReactElement;
}

export interface IChoice {
  children: ReactElement<IInCaseOf>[] | ReactElement<IOtherwise>[];
}
