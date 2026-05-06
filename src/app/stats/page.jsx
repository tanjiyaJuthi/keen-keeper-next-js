import { PieChart } from 'react-minimal-pie-chart';

const StatsPage = () => {
    return (
        <div className="pt-20 pb-20 w-full">
            <h2 className="text-5xl font-bold mb-6">Friends Analytics</h2>

            <div className="card card-dash bg-base-100 mt-5">
                <div className="card-body">
                    <h2 className="card-title">By Interaction Type</h2>
                    
                    <PieChart
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                    />;
                </div>
            </div>
        </div>
    );
};

export default StatsPage;