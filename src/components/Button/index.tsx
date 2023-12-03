import { forwardRef, type ButtonHTMLAttributes } from "react"
import type { VariantProps } from "class-variance-authority"
import { cx } from "@utilities/cx";
import button from "./button.cva"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <button {...props} className={cx(button(props))} ref={ref}>
      {children}
    </button>
  )
})

export default Button