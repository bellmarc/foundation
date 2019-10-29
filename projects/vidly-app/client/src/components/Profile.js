import React, { useEffect, useState } from 'react';
import { UserContext } from '../context/UserProvider';


function Profile() {
    const {getUserLocations, userPosts } = useContext(UserContext)
    useEffect(() => {
        getUserLocations()
    },[])

    return (
        <div>
        {userLocations.map(userLocation => <h1>{userLocation.title}</h1>)}
        </div>
    )
}


export default Profile