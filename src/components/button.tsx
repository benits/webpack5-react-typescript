import { Button } from '@reverb-ui/react'
import React from 'react';

type ButtonProps = {
  label: string,
  callback: () => void
}

export const CustomButton = ({callback, label}:ButtonProps): JSX.Element => {
  return <Button onClick={callback}>{label}</Button>
};