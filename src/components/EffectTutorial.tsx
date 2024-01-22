import * as React from 'react';

interface InitialState{
    counter:number;
    showText:boolean;
}

const initialState: InitialState = {
    counter: 0,
    showText:true
}

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {...state, counter:state.counter + 1, showText: !state.showText}
            break;
        case 'TOGGLE_TEXT':
            return {...state, showText: !state.showText}
            break;
        default:
            return state;
    }
}

const EffectTutorial = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <div>
            <h1>{state.counter}</h1>
            <button onClick={() => dispatch({type:'INCREMENT'})}>Increament</button>
            {state.showText && <p>This is Text</p>}
        </div>
    );
}

export default EffectTutorial