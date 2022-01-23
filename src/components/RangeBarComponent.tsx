import React, { HtmlHTMLAttributes } from 'react';

import { Container } from '../styles/components/RangeBarComponent';

interface RangeBarComponentProps extends HtmlHTMLAttributes<HTMLDivElement> {
    width: string;
}

const RangeBarComponent = ({ width, ...rest }: RangeBarComponentProps) => {
    return (
        <Container width={width} {...rest}>
            <div id="bar" />
        </Container>
    );
}

export { RangeBarComponent };