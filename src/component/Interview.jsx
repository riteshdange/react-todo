import React, { useState,useEffect,useMemo,useCallback,createContext,useContext  } from 'react';
// import axios from 'axios'
const ThemeContext = createContext("light");
function Interview(props) {
const [count, setCount] = useState(0);
 
  useEffect(() => {
	const interval = setInterval(() => {
  	setCount((prevCount) => prevCount + 1);
	}, 1000);
 
	return () => clearInterval(interval);
  }, []);
   return <div>Count: {count}</div>;
}
export default Interview;