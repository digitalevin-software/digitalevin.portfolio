import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { buttonVariants, type ButtonVariantProps } from './button-variants'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps

export function Button({ className, variant, size, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonVariantProps

/** Buton görünümlü bağlantı. */
export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
