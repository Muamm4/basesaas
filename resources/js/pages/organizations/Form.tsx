import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BreadcrumbItem } from '@/types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface User {
    id: number;
    name: string;
}

interface Organization {
    id?: number;
    name: string;
    owner_id: number;
}

interface Props {
    organization?: Organization;
    users: User[];
}

export default function OrganizationForm({ organization, users }: Props) {
    const isEdit = !!organization;

    const { data, setData, post, put, processing, errors } = useForm({
        name: organization?.name || '',
        owner_id: organization?.owner_id || (users.length > 0 ? users[0].id : 0),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        isEdit ? put(`/organization/${organization?.id}`) : post('/organization');
    };

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Organization Management', href: '/organization' },
        { title: isEdit ? 'Edit Organization' : 'Create Organization', href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={isEdit ? 'Edit Organization' : 'Create Organization'} />
            <div className="flex-1 p-4 md:p-6">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-2xl font-bold tracking-tight">
                            {isEdit ? 'Edit Organization' : 'Create New Organization'}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                            {isEdit ? 'Update organization details' : 'Create a new organization and assign an owner'}
                        </p>
                    </CardHeader>

                    <Separator />

                    <CardContent className="pt-5">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="name" className="mb-2 block">Organization Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter organization name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className={errors.name ? 'border-red-500' : ''}
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-500 mt-2">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="owner_id" className="mb-2 block">Owner</Label>
                                    <Select
                                        value={data.owner_id.toString()}
                                        onValueChange={(value) => setData('owner_id', parseInt(value))}
                                    >
                                        <SelectTrigger className={errors.owner_id ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Select an owner" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {users.map((user) => (
                                                <SelectItem key={user.id} value={user.id.toString()}>
                                                    {user.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.owner_id && (
                                        <p className="text-sm text-red-500 mt-2">{errors.owner_id}</p>
                                    )}
                                </div>
                            </div>

                            <Separator />

                            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
                                <Link href="/organization" className="w-full sm:w-auto">
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        className="w-full"
                                    >
                                        Cancel
                                    </Button>
                                </Link>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full sm:w-auto"
                                >
                                    {processing ? (
                                        <span className="flex items-center gap-2">
                                            <span className="animate-spin">↻</span>
                                            Saving...
                                        </span>
                                    ) : isEdit ? (
                                        'Save Changes'
                                    ) : (
                                        'Create Organization'
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
