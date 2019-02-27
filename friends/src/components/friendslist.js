import React from 'react';

function FriendsList(props) {
  return (
    <div>
      {props.friends.map(friend => (
          <div className='friendcard'>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
    </div>
  );
}

export default FriendsList;