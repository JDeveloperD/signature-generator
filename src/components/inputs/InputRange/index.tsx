import { FC, InputHTMLAttributes } from 'react';
import { Typography } from '../../data-display';
import { Slider } from './styled';

type InputRangeProps = {
  label: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputRange: FC<InputRangeProps> = ({ label, className, ...props }) => {
  return (
    <div className={className}>
      <Typography className='text-light fw-bold'>{label}</Typography>

      <div></div>
      <Slider type='range' {...props} />
    </div>
  );
};

export default InputRange;
