import React, { useEffect, useState } from "react";

export function DataDisplayer(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
  
    const fetchData = async () => {
      const response = await fetch (`https://www.theaudiodb.com/api/v1/json`);
      const newData =  await response.json();
      setData(newData)
    
    };
    fetchData();
}, [props.id]);

if (data){
  return <div>{data.name} </div>;

} else {
  return null;
}
}

const BoozyTunes  = (props) => {



  return ( 
    <>
    <h1>Boozy Tunes</h1>
    <h2> Boozy Tunes Results</h2>
    <h3> 60% of users said YES, THIS SONG goes with THIS DRINK</h3>

    <button>Continue</button> <br></br><button>Cancel</button>

    <form action= "submit" method="POST">
    <select>
        <button>Yes</button>
      <option value="Yes">Yes</option>
    </select>

    <select>
        <button>No</button>
      <option value="No">No</option>

      
    </select>

    </form>
    </>
   );
}
 
  export default BoozyTunes;
