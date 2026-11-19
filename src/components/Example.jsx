import {useState, useEffect, useRef} from 'react';

const Example = () => {
  //let traditionalCount = 0;
  const [count, setCount] = useState(0);

  console.log('Component rendered');


  // Tämä ei triggeröi uudelleen renderöintiä
  //const addWithoutState = () => {
    //traditionalCount++;
    //console.log(traditionalCount);
  //};

  const addWithState = () => {
    setCount(count + 1);
    console.log(count);
  };

  // 1. Ilman riippuvuustaulukkoa
  // useEffect(fn)
  useEffect(() => {
    console.log('UseEffect triggered')
  })


  // 2. Komponentin mount-vaiheessa
  // useEffect(fn, [])
  useEffect(() => {
    console.log('UseEffect mount triggered')
  }, [count]);

  // 3. Mount vaiheessa sekä count - arvon muuttuessa
  // useEffect(fn, [count])

  useEffect(() => {
    console.log('UseEffect triggered');
  }, [count]);

  //käytetään useRef
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };




  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addWithState}>Add</button>
      <h3>UseRef demo</h3>
      <input type="text" name="name" id="name" ref={inputRef} />
      <br />
      <button onClick={handleFocus}>Focus input</button>
    </div>
  );
};


export default Hooksexample;
