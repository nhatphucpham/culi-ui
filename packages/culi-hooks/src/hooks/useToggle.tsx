// filepath: /culi-ui/packages/@culi/hooks/src/hooks/useToggle.ts

import { useState } from 'react';

export const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(prevValue => !prevValue);
    };

    return [value, toggle];
};