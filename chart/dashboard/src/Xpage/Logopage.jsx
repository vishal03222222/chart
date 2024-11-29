import React from "react";
import "./Logostyle.css";
import "./summarycard.css"
import "./ScheduleTable.css"
import "./DeferredProduction.css"
import "./ProductionOptimization.css"
import "./SustainableProduction.css"


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

    const data = [
        { name: "GLACIER ROCK 15", deferred: 11297, hours: 187 },
        { name: "TITAN RIDGE 4", deferred: 6200, hours: 124 },
        { name: "HORIZON ECHO 7", deferred: 800, hours: 12 },
    ];


    return (
        <div>
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
            </header>
            
            <div style={{ display: "flex", padding:"50px" }}>
                {/* first portion */}
                <div style={{padding:"50px"}}>
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
                    <br /><br />
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
                <div style={{padding:"50px"}}> 
                    <div className="production-optimization">
                        <div className="header">
                            <h3>Production optimization</h3>
                        </div>
                        <div className="content">
                            <div className="chart-section">
                                <h4>Optimization potential</h4>
                                <div className="chart">
                                    {/* Simulating a chart using CSS */}
                                    <div className="chart-grid">
                                        <div className="chart-line potential"></div>
                                        <div className="chart-line current"></div>
                                    </div>
                                    <div className="chart-legend">
                                        <div className="legend-item">
                                            <span className="legend-color potential-color"></span>
                                            <span>Potential production rate</span>
                                        </div>
                                        <div className="legend-item">
                                            <span className="legend-color current-color"></span>
                                            <span>Current production rate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="data-section">
                                <div className="data-item">
                                    <h5>Speed change</h5>
                                    <p className="value">20,859 <span>Bopd Increase</span></p>
                                    <p className="detail">From 304 wells</p>
                                </div>
                                <div className="data-item">
                                    <h5>Pump change</h5>
                                    <p className="value">16,978 <span>Bopd Increase</span></p>
                                    <p className="detail">From 427 wells</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <button className="recommendations-btn">View all recommendations</button>
                            <button className="tracked-changes-btn">View tracked changes</button>
                        </div>
                    </div>
                    <br /> <br />
                    <div className="sustainable-production">
                        <div className="header">
                            <h3>Sustainable production</h3>
                            <div className="metrics">
                                <div className="metric">
                                    <span>Oil</span>
                                    <span>43,000 bbl/day</span>
                                </div>
                                <div className="metric">
                                    <span>Gas</span>
                                    <span>3,000 mcf/day</span>
                                </div>
                                <div className="metric">
                                    <span>CO₂</span>
                                    <span>3,100 kg/day</span>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="chart-section">
                                <div className="chart">
                                    <div className="chart-grid">
                                        <div className="chart-line oil"></div>
                                        <div className="chart-line gas"></div>
                                        <div className="chart-line co2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="data-section">
                                <div className="data-item">
                                    <h5>Emission events</h5>
                                    <p className="value">
                                        <span className="alert-icon">⚠️</span> 9
                                    </p>
                                    <p className="detail">Active emission events</p>
                                </div>
                                <div className="data-item">
                                    <h5>Asset alerts</h5>
                                    <p className="value">
                                        <span className="alert-icon">⚠️</span> 11
                                    </p>
                                    <p className="detail">Active alerts</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer">
                            <button className="view-alarms-btn">View all emission alarms</button>
                        </div>
                    </div>
                </div>
                {/* lastportion */}
                <div style={{padding:"50px"}}> 
                    <div className="deferred-production">
                        <div className="header">
                            <h3>Deferred production</h3>
                            <p>Cumulative deferred production</p>
                            <h2>18,297 bbl</h2>
                        </div>
                        <div className="top-contributors">
                            <h4>Top contributors</h4>
                            {data.map((item, index) => (
                                <div key={index} className="contributor">
                                    <div className="info">
                                        <span className="name">{item.name}</span>
                                        <span className="deferred">{item.deferred} bbl</span>
                                    </div>
                                    <div className="bar">
                                        <div
                                            className="progress"
                                            style={{
                                                width: `${(item.deferred / 11297) * 100}%`, // Adjust based on max value
                                            }}
                                        ></div>
                                    </div>
                                    <div className="status">
                                        <button className="shutdown">Shutdown</button>
                                        <span>{item.hours} hrs</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="view-all">View all</button>
                    </div>
                </div>
            </div>
            </div>
       
    );
};

export default Logopage;
