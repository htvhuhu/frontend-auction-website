import React, { useEffect, useState } from 'react';
import bidService from '../services/BidService';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../css/pages/BidHistory.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



function BidHistory() {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        async function fetchBids() {
            try {
                const response = await bidService.getMyBidHistory();
                setBids(response);
                console.log(response);
            } catch (error) {
                console.error('Error fetching bids', error);
            }
        }

        fetchBids();
    }, []);

    const groupedBids = bids.reduce((acc, bid) => {
        acc[bid.product.id] = acc[bid.product.id] || [];
        acc[bid.product.id].push(bid);
        return acc;
    }, {});
    const [expanded, setExpanded] = useState({});
    const toggleExpand = (productId) => {
      setExpanded((prev) => ({ ...prev, [productId]: !prev[productId] }));
    };
    return (
        <div className='bid-history'>
            <h3>My Bid History</h3>
            {Object.keys(groupedBids).length > 0 ? (
                Object.keys(groupedBids).map((productId, index) => (
                    <div key={productId}>
                    <button 
                            className="btn swagger-btn" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={`#collapse${index}`} 
                            aria-expanded="false" 
                            onClick={() => toggleExpand(productId)}
                        >
                            {expanded[productId] ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}
                            Product ID: {productId}
                        </button>
                        <div className="collapse collapse-container" id={`collapse${index}`}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Value</th>
                                        <th>Date</th>
                                        <th>Winner</th>
                                        <th>Product Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groupedBids[productId].map(bid => (
                                        <tr key={bid.id} className={`${bid.deposit === 0 ? "history-bid" : "history-deposit"} ${bid.winner ? "history-winner" : ""}`}>
                                            <td>{bid.deposit === 0 ? "Bid" : "Deposit"}</td>
                                            <td>${bid.deposit === 0 ? bid.bidPrice : bid.deposit}</td>
                                            <td>{new Date(bid.bidDate || bid.depositDate)?.toLocaleDateString()}</td>
                                            <td>{bid.winner ? "Yes" : "No"}</td>
                                            <td>{bid.product.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))
            ) : (
                <p>You have not placed any bids yet.</p>
            )}
        </div>
    );
}

export default BidHistory;
