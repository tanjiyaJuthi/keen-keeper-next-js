const TimelinePage = () => {
    return (
        <div className="max-w-6xl mx-auto pt-20 pb-20 text-left">
            <h2 className="text-5xl font-bold mb-6">Timeline</h2>

            <div className="dropdown dropdown-bottom text-left">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 text-left"
                >
                    Click ⬇️
                </div>

                <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow text-left"
                >
                    <li><a className="text-left">Item 1</a></li>
                    <li><a className="text-left">Item 2</a></li>
                </ul>
            </div>

            
        </div>
    );
};

export default TimelinePage;