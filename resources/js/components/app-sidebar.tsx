import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

import { usePage, Link } from '@inertiajs/react';
import AppLogo from './app-logo';
import { NavUser } from '@/components/nav-user';
import { OrganizationSwitcher } from '@/components/organization-switcher';
import { iconMapper } from '@/lib/iconMapper';
import type { LucideIcon } from 'lucide-react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/components/ui/sidebar';

interface MenuItem {
    id: number;
    title: string;
    route: string | null;
    icon: string;
    children?: MenuItem[];
}


function hasActiveChild(items: MenuItem[], currentUrl: string): boolean {
    if (!items) return false;

    return items.some(item => {
        // Verifica se o item atual está ativo
        if (item.route && currentUrl.startsWith(item.route)) {
            return true;
        }

        // Verifica recursivamente os filhos
        if (item.children && item.children.length > 0) {
            return hasActiveChild(item.children, currentUrl);
        }

        return false;
    });
}

function RenderMenu({ items, level = 0 }: { items: MenuItem[]; level?: number }) {
    const { url: currentUrl } = usePage();
    const { state, toggleSidebar, setOpen } = useSidebar();
    const isCollapsed = state === 'collapsed';

    if (!Array.isArray(items)) return null;

    return (
        <>
            {items.map((menu) => {
                if (!menu) return null;
                const Icon = iconMapper(menu.icon || 'Folder') as LucideIcon;
                const children = Array.isArray(menu.children) ? menu.children.filter(Boolean) : [];
                const hasChildren = children.length > 0;
                const childIsActive = hasChildren && hasActiveChild(children, currentUrl);
                const isActive = childIsActive || (menu.route && currentUrl.startsWith(menu.route));
                const indentClass = level > 0 ? `pl-${4 + level * 3}` : '';

                const activeClass = isActive
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground';

                if (!menu.route && !hasChildren) return null;

                const [localState, setLocalState] = useState(hasChildren ? (childIsActive ? 'open' : 'closed') : 'open');

                // Quando o sidebar está colapsado, força o estado dos filhos para fechado
                const effectiveState = isCollapsed ? 'closed' : localState;

                return (
                    <SidebarMenuItem key={menu.id}>
                        {hasChildren ? (
                            <div className={`group ${effectiveState === 'open' ? 'is-open' : ''}`}>
                                <SidebarMenuButton
                                    className={cn(
                                        `group flex items-center justify-between rounded-md transition-colors ${indentClass}`,
                                        activeClass,
                                        level === 0 ? 'py-3 px-4 my-1' : 'py-2 px-3'
                                    )}
                                    onClick={() => {
                                        if (isCollapsed && hasChildren) {
                                            setOpen(true);
                                        } else if (!isCollapsed) {
                                            setLocalState(localState === 'open' ? 'closed' : 'open');
                                        }
                                    }}
                                >
                                    <div className="flex items-center">
                                        <Icon className={cn(
                                            "size-4 opacity-80 group-hover:opacity-100",
                                            isCollapsed ? "mx-auto" : "mr-3"
                                        )} />
                                        {!isCollapsed && <span>{menu.title}</span>}
                                    </div>
                                    {!isCollapsed && (
                                        <ChevronDown className="size-4 opacity-50 group-hover:opacity-70 transition-transform duration-200 group-[.is-open]:rotate-180" />
                                    )}
                                </SidebarMenuButton>
                                <SidebarMenu
                                    className={cn(
                                        "ml-2 border-l border-muted pl-2 overflow-hidden transition-all duration-200",
                                        "max-h-0 opacity-0 group-[.is-open]:max-h-[1000px] group-[.is-open]:opacity-100",
                                        // Oculta completamente quando o sidebar está colapsado
                                        isCollapsed && "hidden"
                                    )}
                                >
                                    <RenderMenu items={children} level={level + 1} />
                                </SidebarMenu>
                            </div>
                        ) : (
                            <SidebarMenuButton
                                asChild
                                className={cn(
                                    `group flex items-center rounded-md transition-colors ${indentClass}`,
                                    activeClass,
                                    level === 0 ? 'py-3 px-4 my-1' : 'py-2 px-3'
                                )}
                            >
                                <Link href={menu.route || '#'}>
                                    <Icon className={cn(
                                        "size-5 opacity-80 group-hover:opacity-100",
                                        isCollapsed ? "mx-auto" : "mr-3"
                                    )} />
                                    {!isCollapsed && <span>{menu.title}</span>}
                                    {level > 0 && !isCollapsed && (
                                        <ChevronRight className="ml-auto size-4 opacity-0 group-hover:opacity-50" />
                                    )}
                                </Link>
                            </SidebarMenuButton>
                        )}
                    </SidebarMenuItem>
                );
            })}
        </>
    );
}

export function AppSidebar() {
    const { menus = [] } = usePage().props as { menus?: MenuItem[] };

    return (
        <Sidebar collapsible="icon" variant="inset" className="border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarHeader className="px-2 py-2 border-b">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="hover:bg-transparent">
                            <Link href="/dashboard" prefetch>
                                <AppLogo variant='icon' size='8' />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="px-2 py-4">
                <SidebarMenu>
                    <RenderMenu items={menus} />
                </SidebarMenu>
            </SidebarContent>
            <div className="flex flex-col gap-4 px-2 py-4">
                <NavUser />
                <OrganizationSwitcher />
            </div>
        </Sidebar>
    );
}