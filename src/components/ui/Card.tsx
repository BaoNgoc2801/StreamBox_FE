import { cn } from "../../lib/utils";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export function Card({ children, className }: CardProps) {
    return <div className={cn("bg-white shadow-md rounded-lg p-4", className)}>{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="p-2">{children}</div>;
}
