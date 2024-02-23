import React from 'react';

interface KeypadProps {
    onBtnClick: (digit: string) => void;
    onClear: () => void;
    onEnter: () => void;
}

const Keypad: React.FC<KeypadProps> = ({onBtnClick, onClear, onEnter}) => {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <div>
            {digits.map((digit) => (
                <button key={digit} onClick={() => onBtnClick(digit.toString())}>{digit}</button>
            ))}
            <button onClick={onClear}>{'<'}</button>
            <button onClick={onEnter}>E</button>
        </div>
    );
};

export default Keypad;