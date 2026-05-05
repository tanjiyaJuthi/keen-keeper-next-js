import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { FiArchive } from "react-icons/fi";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";

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

    const stats = [
        { value: friend.days_since_contact, label: "Days Since Contact" },
        { value: friend.goal, label: "Goal (Days)" },
        { value: friend.next_due_date, label: "Next Due" },
    ];

    const StatCard = ({ value, label }) => (
        <div className="card bg-base-100 shadow-md">
            <div className="card-body items-center text-center p-4">
                <h4 className="text-xl font-semibold">{value}</h4>

                <p className="text-xs text-[#64748B]">
                    {label}
                </p>
            </div>
        </div>
    );

    return (
        <div className="bg-[#F8FAFC] pt-20 pb-20">
            <div className="max-w-6xl mx-auto">
                <div className="flex gap-10">
                    <div className="flex-1">
                        <div className="card bg-base-100 shadow-sm mb-5">
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

                                <p className={`rounded-full p-2 text-[10px] font-semibold text-white ${
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

                        <div className="w-full card bg-base-100 shadow-sm p-2 mb-2">
                            <div className="flex items-center gap-2 justify-center">
                                <RiNotificationSnoozeLine />
                                <span>Snooze 2 Weeks</span>
                            </div>
                        </div>

                        <div className="w-full card bg-base-100 shadow-sm p-2 mb-2">
                            <div className="flex items-center gap-2 justify-center">
                                <FiArchive />
                                <span>Archive</span>
                            </div>
                        </div>

                        <div className="w-full card bg-base-100 shadow-sm p-2 mb-2">
                            <div className="flex items-center gap-2 justify-center">
                                <MdDelete />
                                <span>Delete</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-[2] flex flex-col gap-5 w-full">
                        <div className="flex gap-10 justify-between mb-2">
                            {stats.map((stat, i) => (
                                <StatCard key={i} value={stat.value} label={stat.label} />
                            ))}
                        </div>

                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-lg">Relationship Goal</p>
                                    <Link className="bg-[#F8FAFC] p-2 rounded-lg border border-[#747474]" href="#">Edit</Link>
                                </div>

                                <div className="text-[#64748B]">Connect every <span className="font-bold text-black">{friend.goal} days</span></div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body justify-center text-center">
                                
                                <p className="font-semibold text-lg">Quick Check-In</p>

                                <div className="flex gap-4 justify-between mt-3 w-full">
                                    <div className="p-5 bg-gray-100 rounded-lg text-center">
                                        <IoCallOutline className="text-xl mx-auto" />
                                        <p className="text-sm font-medium">Call</p>
                                    </div>

                                    <div className="p-5 bg-gray-100 rounded-lg text-center">
                                        <IoMdText className="text-xl mx-auto" />
                                        <p className="text-sm font-medium">Text</p>
                                    </div>

                                    <div className="p-5 bg-gray-100 rounded-lg text-center">
                                        <CiVideoOn className="text-xl mx-auto" />
                                        <p className="text-sm font-medium">Video</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsPage;