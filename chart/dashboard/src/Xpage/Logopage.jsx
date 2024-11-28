import React from "react";
import "./Logostyle.css";
import "./summarycard.css"


const Logopage = () => {
    const SummaryCard = () => {
        const issue = [
            { type: "Gas interference", count: 4, color: "red" },
            { type: "Possible hole in tubing", count: 3, color: "red" },
            { type: "Worn out pump", count: 5, color: "red" },
            { type: "Possible broken shaft", count: 0, color: "green" },
        ];
    }
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

                    <div></div>
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
