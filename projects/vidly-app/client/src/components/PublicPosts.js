import React from 'react';
import { UserContext } from '../context/UserProvider.js';

function PublicPosts() {
    const { getAllLocations, locations } = useContent(UserContext)
    useEffect(() => {
    getAllLocations()
    }, [])
    return (
        <div>
            {locations.map(location => <h1>{location.title}</h1>)}
        </div>
    )
}

export default PublicPosts