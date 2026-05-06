"use client";

import { useEffect, useRef, useState } from "react";

const TimelinePage = () => {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      setFriends(data);
      setSelectedFriend(data[0]);
    };

    fetchData();
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case "call":
        return "📞";
      case "text":
        return "💬";
      case "video":
        return "📹";
      case "meetup":
        return "🤝";
      default:
        return "🔹";
    }
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const filteredFriends = friends.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredInteractions =
    selectedFriend?.interactions
      ?.slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .filter((item) => {
        if (typeFilter === "all") return true;
        return item.type === typeFilter;
      })
      .slice(0, 5);

  return (
    <div className="pt-20 pb-20 w-full">
      <h2 className="text-5xl font-bold mb-6">Timeline</h2>

      {/* FRIEND DROPDOWN */}
      <div className="dropdown dropdown-bottom w-64">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 w-full"
          ref={dropdownRef}
        >
          {selectedFriend?.name || "Select Friend"} ⬇️
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-64 p-2 shadow"
        >
          {/* SEARCH INPUT */}
          <input
            type="text"
            placeholder="Filter by name..."
            className="input input-sm input-bordered mb-2 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />

          {/* FRIEND LIST */}
          {filteredFriends.length ? (
            filteredFriends.map((friend) => (
              <li key={friend.id}>
                <button
                  className="text-left w-full"
                  onClick={() => {
                    setSelectedFriend(friend);
                    setQuery("");
                    setTypeFilter("all");
                    dropdownRef.current?.blur();
                  }}
                >
                  {friend.name}
                </button>
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-400 p-2">
              No friends found
            </li>
          )}
        </ul>
      </div>

      {/* INTERACTION FILTER */}
      <div className="flex gap-2 mt-5 flex-wrap">
        {["all", "call", "text", "video", "meetup"].map((type) => (
          <button
            key={type}
            onClick={() => setTypeFilter(type)}
            className={`px-3 py-1 rounded-full text-sm border ${
              typeFilter === type
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* TIMELINE */}
      {filteredInteractions?.length ? (
        filteredInteractions.map((item, index) => (
          <div key={index} className="card card-dash bg-base-100 mt-5">
            <div className="card-body">
              <p className="font-medium capitalize">
                {getIcon(item.type)} {item.type} with {item.with}
              </p>

              <p className="text-xs text-gray-500">
                {formatDate(item.date)}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="card card-dash bg-base-100 mt-5">
          <div className="card-body">
            <p className="text-sm text-gray-400">
              No interactions found
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelinePage;