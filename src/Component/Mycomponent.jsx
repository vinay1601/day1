import React , { useEffect , useState } from 'react'

const Mycomponent = () => {

    const [ count , setCount ] = useState(0);
    const [count2 , setCount2] = useState(10);
    const [count3 , setCount3] = useState(10);

    useEffect(() => {
        console.log('comp is mounting....');

        return function() {
          console.log('unmounting......');

        }
    } , [count , count2] )

    useEffect (() => {
      console.log('count got Upadated' , count);
      return function () {
        console.log('returning count', count)
      }
    }, [count] )


  return (
    <div>
      {/* <h3>My component</h3> */}
      <p>value is {count} </p>
      <p>value is {count2} </p>
      <button onClick={() => setCount(count+1) } >Increment</button>
      <button onClick={() => setCount2(count2+1) } >Increment 2</button>
      <button onClick={() => setCount3(count3+1)} >Increment 3</button>

    </div>
  )
}

export default Mycomponent
