import { useState } from "react";
import PropTypes from 'prop-types';

function Counter({ onIncrease, onDecrease }) {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1)
        if(onIncrease) onIncrease(count + 1)
    }
    const handleDecrease = () => {
        setCount(count - 1)
        if(onDecrease) onDecrease(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return(
        <div style={{ margin: "20px" }}>
            <h1>{count}</h1>    
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

Counter.propTypes = {
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func
}

export default Counter;