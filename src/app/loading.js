import React from 'react';

const loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-base-200">
            
            {/* Loader */}
            <span className="loading loading-spinner loading-lg text-primary"></span>

            {/* Optional text */}
            <p className="text-base-content text-lg font-medium">
                Loading...
            </p>

        </div>
    );
};

export default loading;