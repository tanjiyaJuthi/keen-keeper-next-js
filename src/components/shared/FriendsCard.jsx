import Image from "next/image";
import Link from "next/link";

const FriendsCard = ({friend}) => {
    const statusStyles = {
        overdue: "bg-[#EF4444]",
        'on track': "bg-[#244D3F]",
        'due soon': "bg-[#EFAD44]",
    };
    
    return (
        <Link href={`friends/${friend.id}`} className="card bg-base-100 shadow-sm">
            <figure className="px-6 pt-6">
                <Image
                    src={friend.picture}
                    alt={friend.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                />
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title">{friend.name}</h2>

                <p className="text-[#64748B] text-[10px]">62d ago</p>

                <div className="space-y-2">
                    <p className="flex gap-2">
                        {
                            friend.tags.map((tag, index) => (
                                <span 
                                key={index}
                                className="bg-[#CBFADB] rounded-full p-2 text-[10px] capitalize font-semibold text-[#244D3F]"
                                >
                                    {tag}
                                </span>
                            ))
                        }   
                    </p>

                    <p
                        className={`rounded-full p-2 text-[10px] font-semibold text-white ${
                            statusStyles[friend.status.toLowerCase()] || "bg-gray-400"
                        }`}
                    >
                        {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
                    </p>
                </div>                
            </div>
        </Link>
    );
};

export default FriendsCard;