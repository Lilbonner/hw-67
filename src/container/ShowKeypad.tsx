import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPin, setPin } from "../App/Store.ts";
import AccessMessage from "./AccessMessege.tsx";
import Keypad from "./Keypad.tsx";

const DisplayKeyboard = () => {
    const dispatch = useDispatch();
    const pin = useSelector((state: string) => state);

    const correctPin = '0000';
    const [accessGranted, setAccessGranted] = useState(false);
    const [showAccessMessage, setShowAccessMessage] = useState(false);

    const handleButtonClick = (digit: string) => {
        dispatch(setPin(digit));
    };

    const handleEnter = () => {
        if (pin.toString() === correctPin) {
            setAccessGranted(true);
            setShowAccessMessage(true);
        } else {
            setAccessGranted(false);
            setShowAccessMessage(true);
        }
    };

    const handleClear = () => {
        dispatch(clearPin());
        setShowAccessMessage(false);
    };

    return (
        <div className="w-60">
            {accessGranted ? (
                <AccessMessage message="Access Granted" color="green" />
            ) : showAccessMessage ? (
                <AccessMessage message="Access Denied" color="red" />
            ) : null}
            <div>
                <div className="rounded-md border-2 border-amber-50 h-20 flex items-center text-3xl font-bold">{pin.replace(/./g, '*')}</div>
                <Keypad
                    onBtnClick={handleButtonClick}
                    onClear={handleClear}
                    onEnter={handleEnter}
                />
            </div>
        </div>
    );
};

export default DisplayKeyboard;
