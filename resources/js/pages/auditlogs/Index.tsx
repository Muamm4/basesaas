import React from 'react';
import { Head, router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types';
import { Clock, User, Activity as ActivityIcon, Code } from 'lucide-react';

interface Activity {
    id: number;
    description: string;
    created_at: string;
    causer: { name: string } | null;
    properties: Record<string, any>;
    subject_type: string | null;
}

interface Props {
    logs: {
        data: Activity[];
        current_page: number;
        last_page: number;
        links: { url: string | null; label: string; active: boolean }[];
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Audit Log',
        href: '/audit-logs',
    },
];

export default function AuditLogIndex({ logs }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Audit Log" />
            <div className="flex-1 p-4 md:p-6 space-y-6 max-w-full overflow-hidden">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold tracking-tight">System Audit Logs</h1>
                    <p className="text-muted-foreground text-sm">
                        Track all activity and changes across the system
                    </p>
                </div>

                <Card className="border shadow-sm">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-semibold flex items-center gap-2">
                            <ActivityIcon className="h-5 w-5 text-primary" />
                            Log Entries
                        </CardTitle>
                    </CardHeader>

                    <Separator />

                    <CardContent className="p-0">
                        {logs.data.length === 0 ? (
                            <div className="p-8 text-center text-muted-foreground italic">
                                No activity logs found.
                            </div>
                        ) : (
                            <div className="divide-y divide-muted/50">
                                {logs.data.map((log) => (
                                    <div
                                        key={log.id}
                                        className="p-4 hover:bg-muted/10 transition-colors space-y-3"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                                            <div className="space-y-1 flex-1 min-w-0">
                                                <p className="font-medium text-sm text-foreground wrap-break-word">
                                                    {log.description}
                                                </p>
                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <User className="h-3 w-3" />
                                                        {log.causer?.name ?? 'System'}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        {new Date(log.created_at).toLocaleString()}
                                                    </span>
                                                    {log.subject_type && (
                                                        <span className="bg-primary/5 text-primary px-1.5 py-0.5 rounded flex items-center gap-1">
                                                            <Code className="h-2.5 w-2.5" />
                                                            {log.subject_type.split('\\').pop()}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {log.properties && Object.keys(log.properties).length > 0 && (
                                            <div className="mt-2 group">
                                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                                                    Properties
                                                </div>
                                                <pre className="rounded-lg bg-muted/80 p-3 text-[11px] font-mono overflow-x-auto max-w-full break-all border border-muted-foreground/10 custom-scrollbar">
                                                    {JSON.stringify(log.properties, null, 2)}
                                                </pre>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>

                    {/* Pagination */}
                    {logs.links.length > 3 && (
                        <div className="p-4 border-t bg-muted/5">
                            <div className="flex justify-center flex-wrap gap-2">
                                {logs.links.map((link, i) => (
                                    <Button
                                        key={i}
                                        disabled={!link.url}
                                        variant={link.active ? 'default' : 'outline'}
                                        size="sm"
                                        className="h-8 min-w-8 py-0 px-2"
                                        onClick={() => router.visit(link.url || '', { preserveScroll: true })}
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </AppLayout>
    );
}
