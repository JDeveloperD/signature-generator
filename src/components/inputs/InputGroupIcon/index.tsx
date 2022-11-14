import React, { forwardRef, InputHTMLAttributes } from 'react';
import FieldGroup from './styled';

type InputGroupIconProps = {
  id: string;
  icon: any;
  value: string;
  labelText: string;
  helperText: string;
  isInvalid: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const InputGroupIcon = forwardRef<HTMLInputElement, InputGroupIconProps>(
  function InputGroupIcon(
    {
      id,
      icon,
      value,
      labelText,
      helperText,
      isInvalid,
      ...props
    }: InputGroupIconProps,
    ref
  ) {
    return (
      <FieldGroup.Wrapper className='mb-4'>
        <FieldGroup.Icon>{icon}</FieldGroup.Icon>
        <FieldGroup.Input
          id={id}
          className={`${value ? ' active' : ''}${isInvalid ? ' error' : ''}`}
          value={value}
          ref={ref}
          {...props}
        />
        <FieldGroup.Placeholder htmlFor={id}>
          {labelText}
        </FieldGroup.Placeholder>

        {isInvalid && <FieldGroup.Error>{helperText}</FieldGroup.Error>}
      </FieldGroup.Wrapper>
    );
  }
);

export default InputGroupIcon;
