import React, { useState } from "react";
import api from "../api";
import Users from "./components/users";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    user.bookmark = !user.bookmark;
                }

                return user;
            })
        );
    };

    return (
        <div>
            <Users
                onDelete={handleDelete}
                onBookMark={handleToggleBookMark}
                users={users}
            />
        </div>
    );
};

export default App;
