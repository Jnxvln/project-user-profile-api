/*
  Author: Justin Cox (Github @Jnxvln)
  GitHub Profile: github.com/Jnxvln
  Created: September 28, 2022
  Dependencies: [axios, react, react-dom, react-scripts]
  APIs USED: jsonplaceholder.typicode.com (NO AUTH OR API KEY NEEDED)
*/

import React, { useState } from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import fetchUser from "./libs/fetchUser";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  const handleFetchUser = async () => {
    // Handle loading states while fetching user from API
    setUserLoading(true);
    const user = await fetchUser();
    setUserLoading(false);

    // Set user in local state
    if (!user) setUser(null);
    setUser(user);
  };

  return (
    <section className="container">
      <Header title="User Profile API Example" />

      <button
        disabled={userLoading}
        onClick={handleFetchUser}
        className="btn btn-primary mb-3"
      >
        Load User
      </button>

      <UserProfile user={user} loading={userLoading} />
    </section>
  );
}
