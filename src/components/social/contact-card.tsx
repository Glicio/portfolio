import React from "react";


export default function ContactCard({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {

    return (
        <div className="flex flex-col gap-3 w-[15rem] h-[15rem] rounded-md bg-[var(--neutral-color)] items-center justify-center p-2">
            <div className="h-16 w-16 p-4 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                {icon}
            </div>
            <span className="text-2xl font-bold">{title}</span>            
            <div>
                {children}
            </div>
        </div>
        )
}
            
            

