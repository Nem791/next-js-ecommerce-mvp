import { ReactNode } from "react";

export function PageHeader({ children }: { children: ReactNode }) {
    return <h1 className="text-4x1-mb-4">{children}</h1>
}