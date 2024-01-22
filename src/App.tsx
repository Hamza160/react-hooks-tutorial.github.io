import * as React from 'react';
import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/comments`;

const App = () => {
  const [data, setData] = React.useState("");
  const fetchData = async() => {
    const {data} = await axios.get(url);
    // setData(data);
  }

  React.useEffect(() => {
    fetchData();
    console.log(`Runnning`);
  }, []);

  return (
    <div>App 
      <h1>{data[0]?.email}</h1>
    </div>
  )
}

export default App