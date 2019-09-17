import React from 'react';
import Friend from './Friend';

const FriendList = props => {
    // console.log(props.friends)
    const { friends } = props

    const mappedFriends = friends.map(friend =>
                                <Friend
                                    name={ friend.name }
                                    age={ friend.age }
                                    pets={ friend.pets }
                                    keys={ Math.random() }
                                />)
    return (
        <div>
            {/* returns JS */}
        { mappedFriends }
        </div>
    )
}

export default FriendList