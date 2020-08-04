import React, { FunctionComponent, useCallback } from "react";
import { useCustomHook } from "../utils/hooks";

interface Iprops {
    possibleValues: Array<number>;
}

const TestedComponent: FunctionComponent<Iprops> = (props: Iprops) => {
    const { possibleValues } = props;
    const [value, setValue] = useCustomHook(possibleValues, 1)
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
};

export default TestedComponent;