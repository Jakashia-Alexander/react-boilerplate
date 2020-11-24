
// <form>
//   <input type="text" placeholder="what do you wanna do?" />
//   <button type="start"> start doing it</button>
// </form> 


import React, {useState} from 'react';

const KeepCountForm = (props) => {
    const {setCounterList} = props;
    const [doThis, setDoThis] = useState('')

    return <form onSubmit={(event) => {
        event.preventDefault();
        setCounterList([3]);
    }}> 
    <input type="text" placeholder="what do you wanna do?" />
    <button type="start"> start doing it</button>
  </form> 
}

export default KeepCountForm;

