import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import propTypes from 'prop-types';
const Users = ({users,loading}) => {
    if (loading) {
        return<Spinner />
    }
    else{

        return (
            <div style={userStyle}>
                {users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))
                    
                }
            </div>
        )
            }

}
Users.propTypes={
    users :propTypes.array.isRequired,
    loading :propTypes.bool.isRequired,
}
const userStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
