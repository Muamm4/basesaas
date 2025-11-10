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
    SelectValue
} from '@/components/ui/select';

interface Role {
    id: number;
    name: string;
}

interface Organization {
    id: number;
    name: string;
}

interface User {
    id?: number;
    name: string;
    email: string;
    organization_id?: number | null;
    role?: string;
}

interface Props {
    user?: User;
    roles: Role[];
    organizations: Organization[];
    currentRole?: string;
}

export default function UserForm({ user, roles, organizations, currentRole }: Props) {
    const isEdit = !!user;

    const { data, setData, post, put, transform, processing, errors } = useForm({
        name: user?.name || '',
        email: user?.email || '',
        password: '',
        role: currentRole || '',
        organization_id: user?.organization_id?.toString() || 'none',
    });

    // Transform data before sending to server
    transform((data) => ({
        ...data,
        organization_id: data.organization_id === 'none' ? null : data.organization_id,
    }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        isEdit ? put(`/users/${user?.id}`) : post('/users');
    };

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'User Management', href: '/users' },
        { title: isEdit ? 'Edit User' : 'Create User', href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={isEdit ? 'Edit User' : 'Create User'} />
            <div className="flex-1 p-4 md:p-6">
                <Card className="max-w-3xl mx-auto">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-2xl font-bold tracking-tight">
                            {isEdit ? 'Edit User' : 'Create New User'}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                            {isEdit ? 'Update user data and system context' : 'Enter user data and assign roles/organizations'}
                        </p>
                    </CardHeader>

                    <Separator />

                    <CardContent className="pt-5">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Full name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className={errors.name ? 'border-red-500' : ''}
                                        />
                                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            placeholder="Email address"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className={errors.email ? 'border-red-500' : ''}
                                        />
                                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Password */}
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password {isEdit ? '(Optional)' : ''}</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            className={errors.password ? 'border-red-500' : ''}
                                        />
                                        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                                    </div>

                                    {/* Role */}
                                    <div className="space-y-2">
                                        <Label htmlFor="role">Role</Label>
                                        <Select
                                            value={data.role}
                                            onValueChange={(value) => setData('role', value)}
                                        >
                                            <SelectTrigger className={errors.role ? 'border-red-500' : ''}>
                                                <SelectValue placeholder="Select role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {roles.map((role) => (
                                                    <SelectItem key={role.id} value={role.name}>
                                                        {role.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
                                    </div>
                                </div>

                                {/* Organization */}
                                <div className="space-y-2">
                                    <Label htmlFor="organization_id">Organization</Label>
                                    <Select
                                        value={data.organization_id}
                                        onValueChange={(value) => setData('organization_id', value)}
                                    >
                                        <SelectTrigger className={errors.organization_id ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Select organization" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">No Organization</SelectItem>
                                            {organizations.map((org) => (
                                                <SelectItem key={org.id} value={org.id.toString()}>
                                                    {org.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.organization_id && <p className="text-sm text-red-500">{errors.organization_id}</p>}
                                    <p className="text-[11px] text-muted-foreground">
                                        Assigning an organization will also link the user to it in the system.
                                    </p>
                                </div>
                            </div>

                            <Separator />

                            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
                                <Link href="/users" className="w-full sm:w-auto">
                                    <Button type="button" variant="secondary" className="w-full">
                                        Cancel
                                    </Button>
                                </Link>
                                <Button type="submit" disabled={processing} className="w-full sm:w-auto">
                                    {processing ? (
                                        <span className="flex items-center gap-2">
                                            <span className="animate-spin">↻</span>
                                            Saving...
                                        </span>
                                    ) : isEdit ? (
                                        'Save Changes'
                                    ) : (
                                        'Create User'
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
