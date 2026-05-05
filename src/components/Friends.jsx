import FriendsCard from "./shared/FriendsCard";

const Friends = async () => {
    const res = await fetch(process.env.NEXT_APP_URL + "/friends.json");
    const friends = await res.json();

    return (
        <div className="pt-6 pb-20 border-t border-[#E9E9E9]">
            <h3 className="text-xl font-semibold mb-5">Your Friends</h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 justify-between">
                {
                    friends.map(friend =>
                        <FriendsCard key={friend.id} friend={friend} />
                    )
                }
            </div>
        </div>
    );
};

export default Friends;