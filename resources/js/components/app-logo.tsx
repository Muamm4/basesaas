import { usePage } from '@inertiajs/react';
import AppLogoIcon from './app-logo-icon';
import { MessageCircle } from 'lucide-react';

interface AppLogoProps {
    variant?: 'default' | 'icon';
    size?: string;
}

export default function AppLogo({ variant = 'default', size = '12' }: AppLogoProps) {
    const setting = usePage().props.setting as {
        name_app?: string;
        logo?: string;
    } | null;

    const defaultAppName = 'Laravel';
    const defaultLogo = '';
    const iconSize = parseInt(size) - 4;
    const appName = setting?.name_app || defaultAppName;
    const logo = setting?.logo || defaultLogo;

    return (
        <div className={variant === 'icon' ? 'flex items-center gap-2' : 'flex items-center gap-2 flex-col'}>
            {logo ? (
                <img
                    src={`/storage/${logo}`}
                    alt="Logo"
                    className={`h-${size} w-${size} rounded-md object-contain`}
                />
            ) : (
                <div className={`text-primary-foreground flex aspect-square size-${size} items-center justify-center rounded-md bg-transparent`}>
                    <div className={`w-${size} h-${size} bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center`}>
                        <MessageCircle className={`h-${iconSize} w-${iconSize} text-white`} />
                    </div>
                </div>
            )}
            <div className={`grid flex-1 text-left text-xl`}>
                <span className="mb-0.5 truncate leading-none font-semibold">
                    {appName}
                </span>
            </div>
        </div>
    );
}
