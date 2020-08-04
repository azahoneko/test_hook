import React, { FunctionComponent } from "react";
import { useCustomHook } from "../utils/hooks";

interface props {
    possibleValues: Array<number>;
}

const TestedComponent: FunctionComponent<props> = (props: props) => {
    const [value, setValue] = useCustomHook(props.possibleValues, 1)
    return (
        <div>
            <p>Current value: {value}</p>
            {
                props.possibleValues.map(val => (
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