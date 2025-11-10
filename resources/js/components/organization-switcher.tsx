import { ChevronsUpDown, Building, Check, Plus } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { usePage, router } from '@inertiajs/react';
import { type SharedData, type Organization } from '@/types';
import { cn } from '@/lib/utils';

export function OrganizationSwitcher() {
    const { auth } = usePage<SharedData>().props;
    const { state } = useSidebar();
    const organizations = auth.organizations || [];
    const currentOrg = auth.user.organization;

    const handleSwitch = (orgId: number) => {
        if (orgId === auth.user.organization_id) return;

        router.post(route('organization.switch'), {
            organization_id: orgId
        }, {
            preserveState: false,
            preserveScroll: true
        });
    };

    if (!currentOrg && organizations.length === 0) return null;

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                <Building className="size-4" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold text-sidebar-foreground">
                                    {currentOrg?.name || 'No Organization'}
                                </span>
                                <span className="truncate text-xs text-muted-foreground">
                                    {organizations.length} {organizations.length === 1 ? 'organization' : 'organizations'}
                                </span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4 opacity-50" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        align="start"
                        side={state === 'collapsed' ? 'right' : 'bottom'}
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="text-xs text-muted-foreground">
                            Organizations
                        </DropdownMenuLabel>
                        {organizations.map((org) => (
                            <DropdownMenuItem
                                key={org.id}
                                onClick={() => handleSwitch(org.id)}
                                className="gap-2 p-2 focus:bg-primary/5"
                            >
                                <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                                    <Building className="size-4 text-muted-foreground" />
                                </div>
                                <div className="flex flex-1 flex-col truncate">
                                    <span className="truncate font-medium">{org.name}</span>
                                </div>
                                {auth.user.organization_id === org.id && (
                                    <Check className="size-4 text-primary ml-auto" />
                                )}
                            </DropdownMenuItem>
                        ))}
                        {/*
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 p-2" onClick={() => router.get(route('organization.index'))}>
                            <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                                <Plus className="size-4" />
                            </div>
                            <div className="font-medium text-muted-foreground">Manage Organizations</div>
                        </DropdownMenuItem>*/}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
