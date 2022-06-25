import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const addUser = (user) => {
        console.log("called");
        setUser(user);
    }
    return (
        <UserContext.Provider value = {{ user, addUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;