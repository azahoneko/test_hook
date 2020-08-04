import { useState, useCallback } from "react";

export const EMPTY_OR_INCLUDES_LESS_THEN_ONE = "There should be filled list of possible values which >= 1";
export const NOT_PART_OF_POSSIBLE = "Initial state is not a possible value";

export const useCustomHook = (possibleValues : Array<any>, initialValue: number) => {
    const throwError = (text: string) => {
        throw new Error(text)
    };
    if (!possibleValues.length) {
        throwError(EMPTY_OR_INCLUDES_LESS_THEN_ONE);
    }
    if (!possibleValues.includes(initialValue)) {
        throwError(NOT_PART_OF_POSSIBLE);
    }
    const [currentValue, setValue] = useState(initialValue);

    const changeValue = useCallback(
    (value: number): void => {
            if (possibleValues.includes(value)) {
                setValue(value)
            }
        },
    [possibleValues]
    );
    return [currentValue, changeValue] as const;
};