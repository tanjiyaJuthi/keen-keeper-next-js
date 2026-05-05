import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { FiArchive } from "react-icons/fi";
import { RiNotificationSnoozeLine } from "react-icons/ri";

const FriendDetailsPage = async ({ params }) => {
    const { friendId } = await params;

    const res = await fetch(process.env.NEXT_APP_URL + "/friends.json");
    const friends = await res.json();

    const friend = friends.find((f) => f.id === Number(friendId));

    const statusStyles = {
        overdue: "bg-[#EF4444]",
        "on track": "bg-[#244D3F]",
        "due soon": "bg-[#EFAD44]",
    };

    return (
        <div className="max-w-6xl mx-auto bg-[#f8fafc] grid grid-cols-1 lg:grid-cols-2 gap-10 pt-20 pb-20">
            
            <div className="space-y-5">
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-6 pt-6">
                        <Image
                            src={friend?.picture}
                            alt={friend?.name || "Friend"}
                            width={100}
                            height={100}
                            className="rounded-full object-cover"
                        />
                    </figure>

                    <div className="card-body items-center text-center">
                        <h4 className="text-lg font-semibold">{friend?.name}</h4>

                        <p className="flex gap-2 flex-wrap justify-center">
                            {friend?.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-[#CBFADB] rounded-full p-2 text-[10px] capitalize font-semibold text-[#244D3F]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </p>

                        <p
                            className={`rounded-full p-2 text-[10px] font-semibold text-white ${
                                statusStyles[friend?.status?.toLowerCase()] || "bg-gray-400"
                            }`}
                        >
                            {friend?.status
                                ? friend.status.charAt(0).toUpperCase() + friend.status.slice(1)
                                : "Unknown"}
                        </p>

                        <p className="text-[#64748B] italic">
                            “{friend?.bio}”
                        </p>

                        <p className="text-[10px] text-[#64748B]">
                            Preferred: email
                        </p>
                    </div>
                </div>

                <button className="w-full card bg-base-100 shadow-sm flex items-center gap-2 p-3">
                    <RiNotificationSnoozeLine />
                    Snooze 2 Weeks
                </button>

                <button className="w-full card bg-base-100 shadow-sm flex items-center gap-2 p-3">
                    <FiArchive />
                    Archive
                </button>

                <button className="w-full card bg-base-100 shadow-sm flex items-center gap-2 p-3 text-red-500">
                    <MdDelete />
                    Delete
                </button>
            </div>

            <div></div>
        </div>
    );
};

export default FriendDetailsPage;