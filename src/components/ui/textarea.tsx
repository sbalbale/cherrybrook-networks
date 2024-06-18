// import * as React from "react"

// import { cn } from "@/lib/utils"

// export interface TextareaProps
//   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
//   ({ className, ...props }, ref) => {
//     return (
//       <textarea
//         className={cn(
//           "flex min-h-[80px] w-full rounded-md border border-Textarea bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Textarea.displayName = "Textarea"

// export { Textarea }

// Textarea component extends from shadcnui - https://ui.shadcn.com/docs/components/Textarea
"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--accent),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/Textarea"
      >
        <textarea
          // type={type}
          className={cn(
            `flex h-10 w-full border-none bg-muted text-foreground shadow-Textarea rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-muted-foreground dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-secondary 
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-muted
           group-hover/Textarea:shadow-none transition duration-400
           `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

