import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Badge } from "./badge";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
interface TimelineEntryProps {
    date: string;
    title: string;
    description: string;
    badge: string;
    isDotted: boolean
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ date, title, description, badge, isDotted }) => {
    return (
        <React.Fragment>
            <tr className="h-full"> 
                <td className="align-top"><h3 className="mr-5 text-right hidden md:block">{date}</h3></td>
                <td className="align-top grid grid-cols-1 place-items-center p-0">
                    <div className="h-9 w-9  rounded-full bg-black dark:bg-white"></div>
                    <div className={`h-48 md:h-24 border-l-2 border-black borde dark:border-white ${isDotted && "border-dashed"}`} />
                </td>
                <td className="align-top max-w-2xl px-5">
                    <h5 className="md:hidden mt-1">{date}</h5>
                    <h3>{title}</h3>
                    <p className={"muted"}>{description}</p>
                    <div className="mt-2">
                        <Badge>{badge}</Badge>
                    </div>
                </td>
            </tr>
        </React.Fragment>
    );
};

interface Event {
    date: string;
    content: string;
}

interface TimelineProps {
    children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
    return (
        <div className="flex justify-center mt-3">
            <table>
                {children}
            </table>
        </div>
        
    );
};
export {Timeline, TimelineEntry, badgeVariants }
