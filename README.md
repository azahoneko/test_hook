# Custom react hook

Test project with typescript/react stack, hook tested with react-hooks-testing-library.

## Task description

Build a react hook that a programmer can use to toggle between n arbitrary states where n >= 1. I can feed the hook a set of possible states and an initial state. It returns the current state and a function to let me set a new state.
Use Typescript and write a test suite for it using jest.

## Usage
```npm start```
to start the project

```npm test```
to run tests

## Example
```javascript
import React, { FunctionComponent } from "react";
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
```
