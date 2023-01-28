import React from "react";

import UsersList from "../components/UsersList/UsersList";

const Users = () => {
    const USERS = [
        {
            id: '01', 
            name: 'Chet Hill', 
            image: '../../shared/images/chet.jpg', 
            places: 5
        },
        {
            id: '02', 
            name: 'Bryon Hill', 
            image: '../../shared/images/bryon.jpg', 
            places: 15
        },
        {
            id: '03', 
            name: 'Kevin Hill', 
            image: '../../shared/images/kevin.jpg', 
            places: 9
        },
        {
            id: '04', 
            name: 'Mike Hill', 
            image: '../../shared/images/mike.jpg', 
            places: 10
        }
    ];

    return <UsersList items={USERS} />
}

export default Users;