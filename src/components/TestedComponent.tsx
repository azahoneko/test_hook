import React, { FunctionComponent, useCallback } from "react";
import { useCustomHook } from "../utils/hooks";

interface Iprops {
    possibleValues: Array<any>;
    initialState: any;
}

const TestedComponent: FunctionComponent<Iprops> = (props: Iprops) => {
    const { possibleValues, initialState } = props;
    const [value, setValue] = useCustomHook(possibleValues, initialState)
    return (
        <div>
            <p>Current value: {value}</p>
            {
                possibleValues.map(val => (
                    <button
                        key={Math.random()}
                        disabled={value === val}
                        onClick={() => setValue(val)}
                    >
                        {val}
                    </button>
                ))
            }
        </div>
    )
};

TestedComponent.defaultProps = {
    possibleValues: [1, 2, 3],
    initialState: 1
};

export default TestedComponent;