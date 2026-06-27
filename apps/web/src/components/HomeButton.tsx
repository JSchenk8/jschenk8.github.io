import { buttonVariants } from "@workspace/ui/components/button"
import type { ButtonData } from '../types/index.js'
import { cn } from "@workspace/ui/lib/utils"

export default function HomeButton(data: ButtonData): React.JSX.Element {
  return (
    <a
      href={data.href}
      // className={buttonVariants({ variant: "secondary", size: "sm" })}
       className={cn(
        buttonVariants({ variant: "ghost", size: "lg"}),
         "!text-white font-bold border-2 border-transparent border-white hover:border-transparent hover:bg-transparent text-lg"
      )}
    >
      {data.label}
    </a>
  )
}