import * as React from 'react';
import clsx from 'clsx';

const variants = {
  neutral:'slds-button_neutral',
  brand:'slds-button_brand',
  outlineBrand:'slds-button_outline-brand',
  destructive:'slds-button_destructive',
  textDestructive:'slds-button_text-destructive',
  success:'slds-button_success'
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'neutral',
      isLoading = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'slds-button',
          variants[variant],
          className
        )}
        {...props}
      >
        <span>{props.children}</span>
        {isLoading && '...'}
      </button>
    );
  }
);

Button.displayName = 'Button';
