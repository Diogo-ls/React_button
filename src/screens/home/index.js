import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);

    return (
     <div>
         {count}
         <br/>
        <button onClick={() => setCount(count+1) }> clique aqui</button>
     </div>
    )
} 
export default Home;