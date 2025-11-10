import { toast as sonnerToast } from 'sonner';

type ToastType = 'default' | 'success' | 'error' | 'info' | 'warning';

type ToastProps = {
  title?: string;
  description?: string;
  type?: ToastType;
} & Omit<NonNullable<Parameters<typeof sonnerToast>[1]>, 'description'>;

const useToast = () => {
  const toast = (props: string | ToastProps) => {
    if (typeof props === 'string') {
      return sonnerToast(props);
    }

    const { title, description, type = 'default', ...rest } = props;

    const base = title || description || '';

    switch (type) {
      case 'success':
        return sonnerToast.success(base, { description, ...rest });
      case 'error':
        return sonnerToast.error(base, { description, ...rest });
      case 'info':
        return sonnerToast.info(base, { description, ...rest });
      case 'warning':
        return sonnerToast.warning(base, { description, ...rest });
      default:
        return sonnerToast(base, { description, ...rest });
    }
  };

  return {
    toast,
    toastSuccess: (title: string, description?: string) =>
      sonnerToast.success(title, { description }),
    toastError: (title: string, description?: string) =>
      sonnerToast.error(title, { description }),
    toastInfo: (title: string, description?: string) =>
      sonnerToast.info(title, { description }),
    toastWarning: (title: string, description?: string) =>
      sonnerToast.warning(title, { description }),
  };
};

export { useToast };
