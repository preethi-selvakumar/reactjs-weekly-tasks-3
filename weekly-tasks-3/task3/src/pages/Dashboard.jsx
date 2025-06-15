import React from 'react';

function Dashboard() {
    console.log("Dashboard loaded");
    return (
        <div className="container">
            <h2>Instructor Dashboard</h2>
            <p>Only instructors can see this.</p>
        </div>
    );
}


export default Dashboard;
