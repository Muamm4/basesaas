import { SidebarProvider } from '@/components/ui/sidebar';
import { useState } from 'react';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
    forceCollapsed?: boolean; // Nova prop para forçar colapso
}

export function AppShell({ children, variant = 'header', forceCollapsed = false }: AppShellProps) {
    const [isOpen, setIsOpen] = useState(() => {
        if (forceCollapsed) {
            return false; // Força colapsado se a prop for true
        }
        return typeof window !== 'undefined' ? localStorage.getItem('sidebar') !== 'false' : true;
    });

    const handleSidebarChange = (open: boolean) => {
        setIsOpen(open);

        if (typeof window !== 'undefined') {
            localStorage.setItem('sidebar', String(open));
        }
    };

    if (variant === 'header') {
        return <div className="flex min-h-screen w-full flex-col">{children}</div>;
    }

    return (
        <SidebarProvider defaultOpen={isOpen} open={isOpen} onOpenChange={handleSidebarChange}>
            {children}
        </SidebarProvider>
    );
}
