import * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'chat' | 'chat-list' | 'minimal'
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'custom-scrollbar',
      chat: 'chat-scrollbar scrollbar-smooth',
      'chat-list': 'chat-list-scrollbar',
      minimal: 'minimal-scrollbar'
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-auto",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ScrollArea.displayName = "ScrollArea"

export { ScrollArea }
