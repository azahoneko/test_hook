Test app.

Stack - Typescript, react.
Testings are done by react-hooks-testing-library.

Developed custom react-hook which accept list of possible values to store (all the values are >= 1), and iniitial value, which must be a part of possible values.

Upon changing state it cheks if new value is a part of possible values, otherwise Error is thrown.

Showed example with a list of buttons which is rendered depending on possible values props, click in button triggers custom react-hook change function.
