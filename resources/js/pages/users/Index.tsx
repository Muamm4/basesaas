import React from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type BreadcrumbItem } from '@/types';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Building, Mail, RotateCcw, User, Users } from 'lucide-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/en';

dayjs.extend(relativeTime);
dayjs.locale('en');

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Management',
        href: '/users',
    },
];

interface UserType {
    id: number;
    name: string;
    email: string;
    created_at: string;
    organization?: {
        id: number;
        name: string;
    };
    roles: {
        id: number;
        name: string;
    }[];
}

interface Props {
    users: {
        data: UserType[];
        current_page: number;
        last_page: number;
        links: { url: string | null; label: string; active: boolean }[];
    };
}

export default function UserIndex({ users }: Props) {
    const { delete: destroy, processing } = useForm();

    const handleDelete = (id: number) => {
        destroy(`/users/${id}`);
    };

    const handleResetPassword = (id: number) => {
        router.put(`/users/${id}/reset-password`, {}, { preserveScroll: true });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Management" />
            <div className="flex-1 space-y-6 p-4 md:p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
                        <p className="text-muted-foreground">
                            Manage users, roles and their organization context
                        </p>
                    </div>
                    <Link href="/users/create">
                        <Button className="w-full md:w-auto" size="sm">
                            + Add User
                        </Button>
                    </Link>
                </div>

                <div className="space-y-4">
                    {users.data.length === 0 && (
                        <Card>
                            <CardContent className="py-6 text-center text-muted-foreground">
                                No user data available.
                            </CardContent>
                        </Card>
                    )}

                    {users.data.map((user) => (
                        <Card key={user.id} className="border shadow-sm">
                            <CardHeader className="bg-muted/40 border-b md:flex-row md:items-center md:justify-between md:space-y-0 space-y-2">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <CardTitle className="text-base font-semibold">
                                            {user.name}
                                        </CardTitle>
                                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                                            <Mail className="h-3 w-3" />
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Link href={`/users/${user.id}/edit`}>
                                        <Button size="sm" variant="outline">Edit</Button>
                                    </Link>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button size="sm" variant="secondary">
                                                <RotateCcw className="h-3.5 w-3.5 mr-1" />
                                                Reset
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Reset Password?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Password for <strong>{user.name}</strong> will be reset to the system default.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={() => handleResetPassword(user.id)}
                                                    disabled={processing}
                                                >
                                                    Yes, Reset
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button size="sm" variant="destructive">Delete</Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    User <strong>{user.name}</strong> will be permanently deleted.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={() => handleDelete(user.id)}
                                                    disabled={processing}
                                                >
                                                    Yes, Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center gap-1.5 min-w-37.5">
                                        <Building className="h-4 w-4 text-muted-foreground" />
                                        <span className="font-medium">Organization:</span>
                                        <span className="text-muted-foreground">
                                            {user.organization?.name || 'No Organization'}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                        <span className="font-medium">Roles:</span>
                                        <div className="flex flex-wrap gap-1">
                                            {user.roles.map((role) => (
                                                <Badge key={role.id} variant="secondary" className="font-normal text-[10px] px-1.5 py-0 leading-none h-4">
                                                    {role.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="ml-auto text-xs text-muted-foreground italic">
                                        Joined {dayjs(user.created_at).fromNow()}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
