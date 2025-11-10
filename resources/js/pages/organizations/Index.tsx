import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
import { Building, User } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Organization Management',
        href: '/organization',
    },
];

interface Organization {
    id: number;
    name: string;
    slug: string;
    uuid: string;
    owner?: {
        id: number;
        name: string;
    };
}

interface Props {
    organizations: {
        data: Organization[];
        links: any;
    };
}

export default function OrganizationIndex({ organizations }: Props) {
    const { delete: destroy, processing } = useForm();

    const handleDelete = (id: number) => {
        destroy(`/organization/${id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Organization Management" />
            <div className="flex-1 space-y-6 p-4 md:p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Organization Management</h1>
                        <p className="text-muted-foreground">
                            Manage organizations and their owners
                        </p>
                    </div>
                    <Link href="/organization/create">
                        <Button className="w-full md:w-auto" size="sm">
                            + Add Organization
                        </Button>
                    </Link>
                </div>

                <div className="space-y-4">
                    {organizations.data.length === 0 && (
                        <Card>
                            <CardContent className="py-6 text-center text-muted-foreground">
                                No organization data available.
                            </CardContent>
                        </Card>
                    )}

                    {organizations.data.map((organization) => (
                        <Card key={organization.id} className="border shadow-sm">
                            <CardHeader className="bg-muted/40 border-b md:flex-row md:items-center md:justify-between md:space-y-0 space-y-2">
                                <div className="space-y-1">
                                    <CardTitle className="text-base font-semibold flex items-center gap-2">
                                        <Building className="h-4 w-4 text-primary" />
                                        {organization.name}
                                    </CardTitle>
                                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        Owned by: {organization.owner?.name || 'Unknown'}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Link href={`/organization/${organization.id}/edit`}>
                                        <Button size="sm" variant="outline">Edit</Button>
                                    </Link>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button size="sm" variant="destructive">Delete</Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Organization <strong>{organization.name}</strong> will be permanently deleted.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={() => handleDelete(organization.id)}
                                                    disabled={processing}
                                                >
                                                    Yes, Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4 text-sm text-muted-foreground">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div><span className="font-medium">Slug:</span> {organization.slug}</div>
                                    <div><span className="font-medium">UUID:</span> {organization.uuid}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
