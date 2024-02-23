import React from 'react';

interface KeypadProps {
    onBtnClick: (digit: string) => void;
    onClear: () => void;
    onEnter: () => void;
}

const Keypad: React.FC<KeypadProps> = ({onBtnClick, onClear, onEnter}) => {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <div className="bg-gray-700 grid grid-cols-3 gap-4 rounded-md mt-5 border-black border-2">
            {digits.map((digit) => (
                <button className="bg-black w-15 h-12 border-amber-50 border-2" key={digit} onClick={() => onBtnClick(digit.toString())}>
                    {digit}
                </button>
            ))}
            <button className="bg-black w-15 h-12 border-amber-50 border-2" onClick={onClear}>{"<"}</button>
            <button className="bg-black w-15 h-12 border-amber-50 border-2" onClick={onEnter}>E</button>
        </div>
    );
};

export default Keypad;