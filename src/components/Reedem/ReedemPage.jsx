import React from "react";
import './ReedemPage.css';
import Footer from "../Footer/Footerinfo";



const RedeemPage = () => {
    return(
        <>
            <div className="topContainer">
                <h1 className="topContainer-heading">EcoCoin Store</h1>
                <p className="topContainer-text">Shop in our store or redeem your favourite coupons for free by using EcoCoins.</p>
                <div id="balance-points">
                    <p id="subheading">Your Points :</p>
                    <p>0</p>
                </div>
            </div>
            <div className="mainContainerrr">
                <div className="mainContainer-card">
                    <div className="card-img" id="card-img1">
                        <img src="https://cdn.brandfetch.io/id4J58sqa_/w/800/h/227/theme/dark/logo.png?k=id64Mup7ac&t=1674733845448?t=1674733845448" alt="" />
                    </div>
                    <p className="card-text">BookMyShow Coupon</p>
                    <p className="card-discount-text">40% discount on all Tollywood films</p>
                    <p className="card-item-cost">500 Coins</p>
                    <button>Redeem</button>
                </div>
                <div className="mainContainer-card">
                    <div className="card-img" id="card-img2">
                        <img src="https://cdn.brandfetch.io/idr5xgDFc2/w/820/h/238/theme/dark/logo.png?k=id64Mup7ac&t=1724660891015?t=1724660891015" alt="" />
                    </div>
                    <p className="card-text">Ajio Coupon</p>
                    <p className="card-discount-text">50% discount on all Casual Wear & Shoes</p>
                    <p className="card-item-cost">1000 Coins</p>
                    <button>Redeem</button>
                </div>
                <div className="mainContainer-card">
                    <div className="card-img" id="card-img3">
                        <img src="https://cdn.brandfetch.io/ideeTxiKQK/w/800/h/233/theme/dark/logo.png?k=id64Mup7ac&t=1667590371713?t=1667590371713" alt="" />
                    </div>
                    <p className="card-text">Swiggy Coupon</p>
                    <p className="card-discount-text">Upto 60% discount on Biryani's & Desserts</p>
                    <p className="card-item-cost">100 Coins</p>
                    <button>Redeem</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default RedeemPage;