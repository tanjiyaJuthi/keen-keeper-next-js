const TimelinePage = async () => {
    const res = await fetch(process.env.NEXT_APP_URL + "/friends.json");
    const friends = await res.json();

    return (
        <div className="pt-20 pb-20 w-full">
            <h2 className="text-5xl font-bold mb-6">Timeline</h2>

            <div className="dropdown dropdown-bottom">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 text-left"
                >
                    Filter Timeline ⬇️
                </div>

                <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow text-left"
                >
                    <li><a className="text-left">Item 1</a></li>
                    <li><a className="text-left">Item 2</a></li>
                </ul>
            </div>

            <div className="card card-dash bg-base-100 mt-5">
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>
                    A card component has a figure, a body part, and inside body there are title and actions parts
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;