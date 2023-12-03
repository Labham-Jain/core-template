import { forwardRef, type HTMLAttributes } from "react"
import type { VariantProps } from "class-variance-authority"
import { cx } from "@utilities/cx";
import typography from "./typography.cva";

export type TypographyProps = HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof typography>

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(({ children, ...props }, ref) => {
  return (
    <p {...props} className={cx(typography(props))} ref={ref}>
      {children}
    </p>
  )
})

export default Typography