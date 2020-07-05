import React, { ReactElement } from 'react';
import { IChoice, IOtherwise } from './types';

const Choice = (props: IChoice): ReactElement | null => {
  let defaultChoice: ReactElement<IOtherwise>[] = [];

  const choice = props.children.find((child: any): ReactElement | null => {
    if (child.props.test != undefined) {
      return child.props.test ? child : null;
    } else {
      defaultChoice.push(child);
    }
    return null;
  });

  return choice
    ? choice
    : defaultChoice.length > 0 ?
      defaultChoice[0]
      : null;
};

export default Choice;
