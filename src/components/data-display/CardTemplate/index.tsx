import { FC, HTMLAttributes } from 'react';
import { ButtonToggle, Check } from './styled';
import { BsCheckLg } from 'react-icons/bs';
import Typography from '../Typography';

type CardTemplateProps = {
  active: boolean;
  text: string;
  src: string;
} & HTMLAttributes<HTMLButtonElement>;

const CardTemplate: FC<CardTemplateProps> = ({
  active,
  text,
  src,
  ...props
}) => {
  return (
    <div>
      <Typography className='text-light fw-bold'>{text}</Typography>
      <ButtonToggle active={active} {...props}>
        <img src={src} />
        <Check active={active}>
          <BsCheckLg />
        </Check>
      </ButtonToggle>
    </div>
  );
};

export default CardTemplate;
