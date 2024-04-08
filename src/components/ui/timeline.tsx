import * as React from "react"
import { Badge } from "./badge";

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
            <tr className="h-full py-1"> 
                <td className="align-top h-full"><h3 className="mr-5 text-right hidden md:block">{date}</h3></td>
                <td className="align-top grid grid-cols-1 justify-items-center p-0 min-h-1 h-full relative">
                    <div className="h-9 w-9  rounded-full bg-black dark:bg-white"/>
                    <div className={`h-full absolute border-l-2 border-black borde dark:border-white ${isDotted && "border-dashed"}`} />
                </td>
                <td className="align-top max-w-2xl px-5 h-full">
                    <h5 className="md:hidden mt-1">{date}</h5>
                    <h3>{title}</h3>
                    <p className={"muted"}>{description}</p>
                    <div className="mt-2 mb-8">
                        <Badge>{badge}</Badge>
                    </div>
                </td>
            </tr>
        </React.Fragment>
    );
};

interface TimelineProps {
    children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
    return (
        <div className="flex justify-center mt-3">
            <table className="">
                {children}
            </table>
        </div>
        
    );
};
export {Timeline, TimelineEntry }
