import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <>
       <div>
          <h1>Greeting: </h1>
          {randomGreeting.map((greeting) => (
            <>
                <p>{greeting.message}</p>
            </>
          ))}
       </div>
    </>
  );
};
export default Greeting;