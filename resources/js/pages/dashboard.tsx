import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Building, ShieldCheck, Users, Activity, Clock } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
];

const COLORS = ['#0ea5e9', '#14b8a6', '#f97316', '#9333ea', '#ef4444', '#8b5cf6'];

interface Stat {
    label: string;
    value: number;
    color: string;
    icon: string;
}

interface Trend {
    name: string;
    Users: number;
    Activity: number;
}

interface Distribution {
    name: string;
    value: number;
}

interface RecentActivity {
    id: number;
    description: string;
    causer: string;
    time: string;
}

interface Props {
    stats: Stat[];
    trends: Trend[];
    distribution: Distribution[];
    recentActivity: RecentActivity[];
}

const IconMap: Record<string, React.ReactNode> = {
    'Users': <Users className="h-5 w-5" />,
    'Building': <Building className="h-5 w-5" />,
    'ShieldCheck': <ShieldCheck className="h-5 w-5" />,
    'Activity': <Activity className="h-5 w-5" />,
};

export default function Dashboard({ stats, trends, distribution, recentActivity }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-6 p-4 md:p-6 bg-muted/20 min-h-full">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold tracking-tight">System Overview</h1>
                    <p className="text-muted-foreground">Real-time statistics and activity trends.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((item, index) => (
                        <Card key={index} className="shadow-sm border-none bg-card">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div
                                    className="p-3 rounded-full shrink-0"
                                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                                >
                                    {IconMap[item.icon]}
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                                    <p className="text-2xl font-bold">{item.value.toLocaleString()}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Trends Chart */}
                    <Card className="lg:col-span-2 shadow-sm border-none">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-semibold">Activity Trends</CardTitle>
                            <p className="text-sm text-muted-foreground">Historical view of registrations and events.</p>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={trends} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                                    <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    <Legend verticalAlign="top" height={36} align="right" iconType="circle" />
                                    <Bar dataKey="Users" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={20} />
                                    <Bar dataKey="Activity" fill="#f472b6" radius={[4, 4, 0, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* User Distribution */}
                    <Card className="shadow-sm border-none">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-semibold">User Roles</CardTitle>
                            <p className="text-sm text-muted-foreground">Total distribution by role.</p>
                        </CardHeader>
                        <CardContent className="h-[300px] flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={distribution}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                    >
                                        {distribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(0,0,0,0.1)" strokeWidth={0.5} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    <Legend verticalAlign="bottom" height={36} align="center" iconType="circle" />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity */}
                <Card className="shadow-sm border-none">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-semibold">Recent System Activity</CardTitle>
                        <p className="text-sm text-muted-foreground">Latest events recorded in the system logs.</p>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-muted/50">
                            {recentActivity.length > 0 ? (
                                recentActivity.map((log) => (
                                    <div key={log.id} className="p-4 flex items-center justify-between hover:bg-muted/10 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 p-2 bg-muted rounded-full text-muted-foreground">
                                                <Clock className="h-3.5 w-3.5" />
                                            </div>
                                            <div className="space-y-0.5">
                                                <p className="text-sm font-medium leading-none">{log.description}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    By <span className="font-semibold text-foreground/80">{log.causer}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded">
                                            {log.time}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="p-8 text-center text-muted-foreground italic">No activity logs found.</div>
                            )}
                        </div>
                        {recentActivity.length > 0 && (
                            <div className="p-4 bg-muted/5 border-t">
                                <a href="/audit-logs" className="text-xs font-semibold text-primary hover:underline flex items-center justify-center gap-1">
                                    View full logs history
                                </a>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

