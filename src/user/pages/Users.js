import React from "react";

import UsersList from "../components/UsersList/UsersList";

const Users = () => {
    const USERS = [
        {
            id: '01', 
            name: 'Chet Hill', 
            image: 'https://www.pexels.com/photo/gray-mercedez-benz-amg-112460/', 
            places: 3
        },
        {
            id: '02', 
            name: 'Bryon Hill', 
            image: 'https://www.pexels.com/photo/black-dodge-challenger-coupe-3311574/', 
            places: 3
        },
        {
            id: '03', 
            name: 'Kevin Hill', 
            image: 'https://www.pexels.com/photo/black-audi-a-series-parked-near-brown-brick-house-909907/', 
            places: 3
        },
        {
            id: '04', 
            name: 'Mike Hill', 
            image: 'https://www.pexels.com/photo/photo-of-parked-lime-green-lamborghini-2127733/', 
            places: 3
        }
    ];

    return <UsersList items={USERS} />
}

export default Users;