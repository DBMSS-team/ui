import React from "react";
import '../styles/StoreCard.css';

export default function () {

    return (
        <div className='storecard'>
            <div className='storecard__left'>
                <img src="/assets/images/empire.png" alt="empire" height="100%" width="150px" />
            </div>
            <div className='storecard__right'>
                <div className='restaurant__name'>Empire Restaurant</div>
                <div className='restaurant__type'>North Indian</div>
                <div className='restaurant__details'>
                    <div className='restaurant__distance'>2.2 km</div>
                    <div className='restaurant__location'>Castle Street</div>
                </div>
                <div className='restaurant__time'>25 MINS</div>
            </div>
        </div>
    )
}