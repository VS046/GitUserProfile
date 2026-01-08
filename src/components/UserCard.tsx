const UserCard = ({ user, repos }) => {
    if (!user) return null;

    return (
        <div className="flex justify-center mt-10 px-4">
            <div className="w-full max-w-[380px] p-6 rounded-2xl text-center text-white bg-black backdrop-blur-xl
                           border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]  transition-all duration-300hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
                
                <img
                    src={user.avatar_url}
                    className="w-24 h-24 rounded-full mx-auto mb-3  border-4 border-white"
                />

                <h2 className="text-2xl font-semibold">
                    {user.login}
                </h2>

                <p className="text-white/80 text-sm mb-4">
                    {user.bio}
                </p>

                <div className="flex justify-between bg-white/10 rounded-xl px-4 py-3 text-sm mb-5">
                    <span>👥 {user.followers}</span>
                    <span>👤 {user.following}</span>
                    <span>📦 {user.public_repos}</span>
                </div>

                <div className="text-left">
                    <h4 className="font-semibold mb-2 text-white/90">
                       ⭐ Top Repositories
                    </h4>

                    {repos.slice(0, 5).map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            className="block px-3 py-2  mb-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm"  >
                            {repo.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserCard;
