import React from 'react';
import { Text } from '@reverb-ui/react';

type DisplayProps = {
  value: number
}

export const Display = ({value}:DisplayProps): JSX.Element => {
  return <Text>{value}</Text>
};