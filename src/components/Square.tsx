import * as React from 'react';
import classnames from 'classnames';
import '../css/Square.css';

export interface SquareProps {
    styling: string;
    blackSquare: boolean;
    onClick: () => void;
}

export default function Square(props: SquareProps) {
    const classNames = classnames('Square', props.styling, {
        black: props.blackSquare,
        white: !props.blackSquare,
    });
    return <div onClick={props.onClick} className={classNames}></div>;
}
