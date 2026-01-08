import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import StarBackground from "../components/StarBackground";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    const fetchUser = async (username) => {
        if (!username) return;

        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        if (!userRes.ok) {
            alert("User not found");
            return;
        }

        const repoRes = await fetch(
            `https://api.github.com/users/${username}/repos`
        );
        const repoData = await repoRes.json();

        setUser(userData);
        setRepos(repoData);
    };

    return (
        <div>
            <SearchBar onSearch={fetchUser} />
            <UserCard user={user} repos={repos} />
            <StarBackground />
        </div>

    );
};

export default Profile;
