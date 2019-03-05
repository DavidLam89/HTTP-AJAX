import React from 'react';

function FriendsList({ friends, setUpdateFriend }) {
  return (
    <div>
      {friends.map(friend => (
          <div className='friendcard' onClick={e => setUpdateFriend(e, friend)}>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
    </div>
  );
}

export default FriendsList;
