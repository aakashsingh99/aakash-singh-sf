import clsx from "clsx"
import { FC } from "react"

const variants = {
  small : 'slds-brand-band_small',
  medium: 'slds-brand-band_medium',
  large: 'slds-brand-band_large'
} 

export type BrandProps = {
  variant?: keyof typeof variants,
}

const Brand : FC<BrandProps> = (
    { 
      variant='medium',
    } : BrandProps
  ) => {
  return (
    <div className={clsx(
      'slds-brand-band',
      variants[variant],
    )}></div>
  )
}

export default Brand