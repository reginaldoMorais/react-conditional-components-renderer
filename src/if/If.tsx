import { ReactNode } from "react";
import { IIf } from './types';

const If = (props: IIf): any => {
  if (props.test) {
    return props.children;
  }

  if (props.orElse) {
    return props.orElse;
  }

  return null;
};

export default If;
