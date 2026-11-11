import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:size-4 [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-brand-dark',
        outline: 'border border-foreground/15 bg-card text-foreground hover:bg-secondary',
        ghost: 'text-foreground hover:bg-secondary',
        inverse: 'bg-white text-brand-dark hover:bg-secondary focus-visible:ring-white focus-visible:ring-offset-primary',
        'inverse-outline':
          'border border-white/35 text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-primary',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        default: 'h-11 px-5 text-[0.9375rem]',
        lg: 'h-12 px-6 text-base',
        icon: 'size-11',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
