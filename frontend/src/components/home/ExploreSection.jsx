import React from "react";
import { Link } from "react-router-dom";
import AssetTable from "./AssetTable";

function ExploreSection() {
    return (
        <section className="cb-explore-section">
            <div className="cb-explore-inner">
                <div className="cb-explore-content">
                    <h2>Explore crypto like Bitcoin, Ethereum, and Dogecoin.</h2>
                    <p>Simply and securely buy, sell, and manage hundreds of cryptocurrencies.</p>
                    <Link to="/explore" className="cb-btn-dark">See more assets</Link>
                </div>
                <AssetTable />
            </div>
        </section>
    );
}

export default ExploreSection;
