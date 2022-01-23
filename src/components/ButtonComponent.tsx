import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { Button, ButtonDanger, ButtonSecondary } from '../styles/components/ButtonComponent';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    variant?: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
}

const ButtonComponent = ({ variant, children, ...rest }: ButtonProps) => {

    if (variant === "secondary") {
        return (
            <ButtonSecondary {...rest}>
                {
                    children
                }
            </ButtonSecondary>
        );
    }

    if (variant === "danger") {
        return (
            <ButtonDanger {...rest}>
                {
                    children
                }
            </ButtonDanger>
        );
    }

    return (
        <Button {...rest}>
            {
                children
            }
        </Button>
    );
}

export default ButtonComponent;