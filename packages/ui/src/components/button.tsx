export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button className='button' type='button' {...other}>
      <div>{children}</div>
    </button>
  )
}

Button.displayName = 'Button'
