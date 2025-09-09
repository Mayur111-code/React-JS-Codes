import React, { useMemo, useState } from 'react'

const Usememocallback = () => {

    const [count, setCount] = useState(1);
    const [item, setItem] = useState(0);

    const updateCount = () =>{
        setCount( count + 1)
    }

    const reduceCount = () =>{
        setCount(count -1);
    }

    const updateItem = () =>{
        setItem(item +1);
    }
    
    const reduceItem = () =>{
        setItem(item -1)
    }

    // const demo = () =>{
    //     console.log("demo function call");
    // }

    // demo()

    const demo = useMemo(()=>{
console.log('demo function call memo')
return count + 5;
    }, [count])
   

  return (
    <div>
<h1>count is {count}</h1>
<hr />
<h1>item is {item}</h1>

<button onClick={()=> updateCount()}>Update count</button>
<button onClick={()=> reduceCount()}>Reduce count</button>
<hr />
<button onClick={()=> updateItem()}>Update item</button>
<button onClick={()=> reduceItem()}>Reduce item</button>

<h2>{demo}</h2>

<hr />



    </div>
  )
}

export default Usememocallback