import { ReactNode } from 'react';

export interface IIf {
  test: boolean;
  orElse?: ReactNode;
  children: ReactNode;
}
