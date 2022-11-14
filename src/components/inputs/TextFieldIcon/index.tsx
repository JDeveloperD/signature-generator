import React, { FC, InputHTMLAttributes } from 'react';
import pencil from '../../../static/pencil.svg';
import Tooltip from '../../data-display/Tooltip';
import Field from './styled';

type TextFieldIconProps = {
  id: string;
  textLabel: string;
  tooltipMessage?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextFieldIcon: FC<TextFieldIconProps> = ({
  id,
  textLabel,
  tooltipMessage,
  className,
  ...props
}) => {
  return (
    <Field.Wrapper className={className}>
      <Field.Label htmlFor={id}>
        {textLabel}
        {tooltipMessage && <Tooltip symbol='?' text={tooltipMessage} />}
      </Field.Label>
      <Field.Input autoComplete='off' id={id} {...props} />
      <Field.PencilIcon>
        <img src={pencil} alt='' />
      </Field.PencilIcon>
    </Field.Wrapper>
  );
};

export default TextFieldIcon;
