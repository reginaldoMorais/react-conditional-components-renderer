import { ReactNode } from 'react';

export interface IIf {
  test: boolean | unknown;
  orElse?: ReactNode;
  children: ReactNode;
}
