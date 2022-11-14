import React, { FC } from 'react';
import { Typography } from '../../data-display';
import GroupColor from './styled';

type InputColorProps = {
  className: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: any;
  name: string;
  label: string;
};

const InputColor: FC<InputColorProps> = ({
  className,
  onChange,
  value,
  name,
  label,
}) => {
  return (
    <div className={className}>
      <Typography className='text-light fw-bold'>{label}</Typography>
      <div className='d-flex gap-3'>
        <GroupColor.Input
          name={name}
          className='text-uppercase'
          value={value}
          onChange={onChange}
        />
        <GroupColor.Color name={name} value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default InputColor;
