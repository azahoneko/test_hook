import { useState } from "react";

export const EMPTY_OR_INCLUDES_LESS_THEN_ONE = "There should be filled list of possible values that bigger then 0";
export const NOT_PART_OF_POSSIBLE = "Initial state is not a possible value";

export const useCustomHook = (possibleValues : Array<number>, initialValue: number) => {
    const throwError = (text: string) => {
        throw new Error(text)
    };
    if (!possibleValues.length || possibleValues.some(val => val <= 0)) {
        throwError(EMPTY_OR_INCLUDES_LESS_THEN_ONE);
    }
    if (!possibleValues.includes(initialValue)) {
        throwError(NOT_PART_OF_POSSIBLE);
    }
    const [currentValue, setValue] = useState(initialValue);

    const toggleValue = (value: number) =>
        (value > 0 && possibleValues.includes(value)) ? setValue(value) : undefined;

    return [currentValue, toggleValue] as const;
};