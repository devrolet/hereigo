import React from "react";

import UsersItem from "../UsersItem/UsersItem";
import './UsersList.css';

const UsersList = props => {
    if(props.items.length === 0) {
        return (
            <div className="center">
                <h2>sNo Users Found.</h2>
            </div>
        )
    };

    return <ul>
        {props.items.map(user => <UsersItem 
                                    key={user.id} 
                                    id={user.id} 
                                    image={user.image} 
                                    name={user.name} 
                                    placeCount={user.places} 
                                />
                        )}
    </ul>
}

export default UsersList;