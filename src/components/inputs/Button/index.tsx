import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';
import { Color } from '@styled/styled';
import { ButtonHTMLAttributes } from 'react';

export type VariantButton = 'contained' | 'outlined' | 'text' | undefined;

export type SizeButton = 'sm' | 'md' | 'lg' | 'icon' | undefined;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantButton;
  size?: SizeButton;
  color?: Color;
};

const variantStyles = (
  theme: DefaultTheme,
  variant: VariantButton = 'text',
  color: Color = 'dark-900'
) =>
  ({
    contained: css`
      background: ${theme.colors[color]};
      color: white;
      border-color: ${theme.colors[color]};
      padding: 0.5rem 1rem;

      &:hover {
        background: ${darken(0.1, theme.colors[color])};
        border-color: ${darken(0.1, theme.colors[color])};
        color: white;
      }

      &:disabled {
        background: ${theme.colors['gray-600']};
        border-color: ${theme.colors['gray-600']};
      }
    `,
    outlined: css`
      background: transparent;
      color: ${theme.colors[color]};
      border: 1px solid ${theme.colors[color]};
    `,
    text: css`
      background-color: transparent;
      color: ${theme.colors[color]};
    `,
  }[variant]);

const sizesStyles = (size = 'md') =>
  ({
    md: css`
      padding: 0.5rem 1rem;
    `,
    lg: css`
      padding: 0.85rem 1.75rem;
      font-size: 1.25rem;
    `,
  }[size]);

const Button = styled.button<ButtonProps>`
  text-decoration: none;
  border-style: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  ${({ theme, variant, color }) => variantStyles(theme, variant, color)}

  ${({ size }) => sizesStyles(size)}
`;

export default Button;
