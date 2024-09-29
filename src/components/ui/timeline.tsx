import * as React from "react"
import { Badge } from "./badge";

interface TimelineEntryProps {
    date: string;
    title: string;
    description: string;
    badge?: string;
    isDotted: boolean
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ date, title, description, badge, isDotted }) => {
    return (
            <li className="h-full py-1 table-row"> 
                <div className="table-cell align-top">
                    <time className="mr-5 text-right hidden md:block scroll-m-20 text-2xl font-semibold tracking-tight">{date}</time>
                </div>
                <div className="flex justify-center p-0 min-h-1 h-full relative">
                    <div className="h-9 w-9 rounded-full bg-black dark:bg-white"/>
                    <div className={`absolute h-full border-l-2 border-black borde dark:border-white ${isDotted && "border-dashed"}`} />
                </div>
                <div className="table-cell align-top max-w-2xl px-5 h-full">
                    <h5 className="md:hidden mt-1">{date}</h5>
                    <h3>{title}</h3>
                    <p className={"muted"}>{description}</p>
                    <div className="mt-2 mb-8">
                    {
                        badge && (
                            
                                <Badge>{badge}</Badge>
                            
                        )
                    }
                    </div>
                </div>
            </li>
    );
};

interface TimelineProps {
    children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
    return (
        <div className="flex justify-center mt-3">
            <ol className="table h-full">
                {children}
            </ol>
        </div>
        
    );
};
export {Timeline, TimelineEntry }
