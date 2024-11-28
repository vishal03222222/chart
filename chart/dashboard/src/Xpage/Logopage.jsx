import React from "react";
import "./Logostyle.css";
import "./summarycard.css"
import "./ScheduleTable.css"


const Logopage = () => {

    const issues = [
        { type: "Gas interference", count: 4, color: "red" },
        { type: "Possible hole in tubing", count: 3, color: "red" },
        { type: "Worn out pump", count: 5, color: "red" },
        { type: "Possible broken shaft", count: 0, color: "green" },
    ];
    const scheduleData = [
        { wellName: "GLACIER ROCK 15", date: "04-Aug-2024", jobType: "Install-New" },
        { wellName: "TITAN RIDGE 4", date: "22-Aug-2024", jobType: "Pul-EOT" },
        { wellName: "HORIZON ECHO 7", date: "19-Sept-2024", jobType: "DFA" },
        { wellName: "SUMMIT PEAK 11", date: "13-Oct-2024", jobType: "Service" },
        { wellName: "ATLAS VALLEY 6", date: "28-Oct-2024", jobType: "Pul-EOT" },
        { wellName: "ORION FIELD 9", date: "09-Sept-2024", jobType: "Pul-EOT" },
        { wellName: "FRONTIER BASIN 5", date: "26-Oct-2024", jobType: "Install-New" },
    ];


    return (
        <header className="header">
            <div className="logo">Connexia</div>
            <div className="user-section">
                <div className="greeting">Hello, Jason</div>
                <div className="buttons">
                    <button className="btn btn-insights">My Insights</button>
                    <button className="btn btn-apps">My Apps</button>
                </div>
            </div>
            <div className="actions">
                <input type="text" placeholder="Search" className="search-bar" />
                <div className="icons">
                    <span className="icon">🔔</span>
                    <span className="icon">👤</span>
                </div>
                <button className="add-btn">+</button>
            </div>
        <div>
                {/* first portion */}
                <div>
                    <div className="card">
                        <div className="card-header">
                            Change point detection summary
                            <span className="menu-icon">⋮</span>
                        </div>
                        <div className="card-body">
                            {issues.map((issue, index) => (
                                <div key={index} className="issue">
                                    <div className="issue-icon" style={{ color: issue.color }}>
                                        {issue.color === "red" ? "▲" : "△"}
                                    </div>
                                    <div className="issue-details">
                                        <span className="issue-type">{issue.type}</span>
                                        <span className="issue-count">
                                            {issue.count} potential well issue(s)
                                        </span>
                                    </div>
                                    <div className="arrow-icon">➤</div>
                                </div>
                            ))}
                        </div>
                        <button className="view-all-btn">View all</button>
                    </div>

                    <div className="schedule-card">
                        <div className="schedule-header">Schedule</div>
                        <div className="schedule-table">
                            <div className="table-header">
                                <div className="column well-name">Well name</div>
                                <div className="column date">Date</div>
                                <div className="column job-type">Job Type</div>
                            </div>
                            {scheduleData.map((row, index) => (
                                <div className="table-row" key={index}>
                                    <div className="column well-name">{row.wellName}</div>
                                    <div className="column date">{row.date}</div>
                                    <div className="column job-type">{row.jobType}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* middleportion */}
                <div>
                    <div></div>
                    <div></div>
                </div>
                {/* lastportion */}
                <div>
                    <div></div>
                </div>
            </div>
        </header>
    );
};

export default Logopage;
