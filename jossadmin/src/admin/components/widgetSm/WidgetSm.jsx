import "./widgetSm.css";

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New join members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://icons.iconarchive.com/icons/iconarchive/cute-animal/512/Cute-Dog-icon.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Cute Dog Icon</span>
                        <span className="widgetSmUserTitle">Cute Animal Icons</span>
                    </div>
                    <button className="widgetSmButton">
                        <i className="bi bi-eye-fill widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://icons.iconarchive.com/icons/iconarchive/cute-animal/512/Cute-Dog-icon.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Cute Dog Icon</span>
                        <span className="widgetSmUserTitle">Cute Animal Icons</span>
                    </div>
                    <button className="widgetSmButton">
                        <i className="bi bi-eye-fill widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://icons.iconarchive.com/icons/iconarchive/cute-animal/512/Cute-Dog-icon.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Cute Dog Icon</span>
                        <span className="widgetSmUserTitle">Cute Animal Icons</span>
                    </div>
                    <button className="widgetSmButton">
                        <i className="bi bi-eye-fill widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}