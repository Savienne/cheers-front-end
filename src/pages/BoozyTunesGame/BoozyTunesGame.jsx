import React, { useEffect, useState } from "react";
import * as pollService from "../../services/pollService";
import { drinks } from "../../data/drink-data"
function BoozyTunes(props) {
  
  const [songData, setSongData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);
  
  useEffect(() => {
    
    const fetchDrinkData = async () => {
      const response = await fetch (``);
      console.log(response)
      const newDrinkData = response.json();
      console.log(newDrinkData)
      setDrinkData(newDrinkData)
    };
    const fetchSongData = async () => {
      const response = await fetch (`cors.anywhere/https://www.theaudiodb.com/api/v1/json`);
      const newSongData =  await response.json();
      setSongData(newSongData)
    }
    fetchDrinkData();
    fetchSongData();
  }, []);

// console.log(songData)
// console.log(drinkData)

  return ( 
    <>
    <h1>Boozy Tunes</h1>
    <h2> Boozy Tunes Results</h2>
    <h3> 60% of users said YES, THIS SONG goes with THIS DRINK</h3>
    <p>This list of drinks</p>
    {drinks.map(drink => 
      {
        return <p>{drink.name}</p>
      }

      )}

    <button>Continue</button> <br></br><button>Cancel</button>

    {/* <form action= "submit" method="POST">
    <select>
        <button>Yes</button>
      <option value="Yes">Yes</option>
    </select>

    <select>
        <button>No</button>
      <option value="No">No</option>

      
    </select>

    </form> */}
    </>
   )
}
 
  export default BoozyTunes;
