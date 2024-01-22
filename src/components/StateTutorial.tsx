import * as React from 'react';

const StateTutorial = () => {
    const [counter, setCounter] = React.useState<number>(0);
    const [showText, setShowText] = React.useState<boolean>(true);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => {
                setCounter(counter => counter + 1)
                setShowText(!showText);
            }}>Increament</button>
            {showText && <p>This is Text</p>}
        </div>
    );
}

export default StateTutorial