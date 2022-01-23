import React, { InputHTMLAttributes, ReactNode } from 'react';

import { Input } from '../styles/components/InputComponent';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputComponent = ({ ...rest }: InputProps) => {
    return (
        <Input
            {...rest}
        />
    );
}

export { InputComponent };