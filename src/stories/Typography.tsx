import React from 'react';
import '../styles/css/base.css';

type TypographyProps = { 
    text: string;
    type?: 'header-h1' | 'header-h2 | header-h3';
};

export const Typography = (props: TypographyProps) => {
    const {
        text,
        type,
    } = props;
    
    return (
        <div className={`text__${type}`}>
            {text}
        </div>
    );
};
