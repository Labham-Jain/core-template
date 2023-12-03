import { forwardRef, type InputHTMLAttributes } from "react"
import type { VariantProps } from "class-variance-authority"
import { cx } from "@utilities/cx";
import input from "./input.cva";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof input>

const Input = forwardRef<HTMLInputElement, InputProps>(({ children, ...props }, ref) => {

  return (
    <input {...props} className={cx(input(props))} ref={ref}>
      {children}
    </input>
  )
})

export default Input