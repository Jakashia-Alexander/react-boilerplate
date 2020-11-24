import React, {useState} from 'react';

import KeepCountForm from './KeepCountForm';
import KeepCountCounter from './KeepCountCounter';

const App = () => {
    //javascript can live here...
    //must return a JSX template
    const [counterList, setCounterList] = useState([]);
    return <>
        <KeepCountForm setCounterList = {setCounterList}/>
        {
            counterList.map((counter, idx) => {
                return <h5 key = {idx} >{counter}</h5>
            })
        }
    </>
}

export default App;