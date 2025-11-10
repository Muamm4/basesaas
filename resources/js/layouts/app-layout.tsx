import React from 'react';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';

interface AppLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
  forceSidebarCollapsed?: boolean; // Nova prop
}

export default function AppLayout({ children, breadcrumbs, title, forceSidebarCollapsed }: AppLayoutProps) {
  return (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} title={title} forceSidebarCollapsed={forceSidebarCollapsed}>
      {children}
    </AppLayoutTemplate>
  );
}
