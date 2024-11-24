import "./featuredInfo.css";

export default function FeaturedInfo() {
    return (
        <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revannue</span>
            <div className="featutedMoneyContainer">
                <span className="featuredMoney">$2.415</span>
                <span className="featuredMoneyRate">-11.4 <i className="bi-solid bi-arrow-down featuredIcon negative"></i></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revannue</span>
                <div className="featutedMoneyContainer">
                    <span className="featuredMoney">$2.415</span>
                    <span className="featuredMoneyRate">-11.4 <i className="bi-solid bi-arrow-down featuredIcon negative"></i></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revannue</span>
                <div className="featutedMoneyContainer">
                    <span className="featuredMoney">$2.415</span>
                    <span className="featuredMoneyRate">+2.4 <i className="bi-solid bi-arrow-up featuredIcon"></i></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    );
}