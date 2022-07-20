import { Link } from 'react-router-dom'
import { useState } from 'react';

const Profile = ({user, profile}) => {
  console.log(profile.favoriteDrink)
  return ( 
    <>
      <div className='all-profiles'>
        <img src={profile.photo}
          alt={profile.name}
          className="card-photo"
          style={{width:"150px"}}
        />
        <div className='card-body'>
          {user.profile === profile._id ?
            <>
              <Link to="/my-page" state={profile}>
                <h2 key={profile._id} className='card-text'>{profile.name}</h2>
              </Link>
            </>
            :
            <>
              <Link to={`/profile`} state={{profile}}>
                <h2 key={profile._id} className='card-text'>{profile.name}</h2>
              </Link>
            </>
          }
          <p className='card-text'>Favorite Song: {profile.favoriteSong}</p>
          <p className='card-text'>Favorite Drink: {profile.favoriteDrink?.name} {profile.favoriteDrink?.category}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;