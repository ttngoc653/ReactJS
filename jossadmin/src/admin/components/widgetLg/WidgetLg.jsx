import "./widgetLg.css";

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Lastest transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/275426269_491991895747233_843183024535462843_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Jg01zrsqt0cQ7kNvgF-tgX1&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=An2Y8vrTu4_9ra99Zq-U073&oh=00_AYDIMD1nBDVon-Ysc_Tzc17w2UGYGIxjupVpK6CiVvh3tA&oe=674796F0" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Icons Anime</span>
                    </td>
                    <td className="widgetLgDate">23 Nov 2024</td>
                    <td className="widgetLgAmount">$1959.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/275426269_491991895747233_843183024535462843_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Jg01zrsqt0cQ7kNvgF-tgX1&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=An2Y8vrTu4_9ra99Zq-U073&oh=00_AYDIMD1nBDVon-Ysc_Tzc17w2UGYGIxjupVpK6CiVvh3tA&oe=674796F0" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Icons Anime</span>
                    </td>
                    <td className="widgetLgDate">23 Nov 2024</td>
                    <td className="widgetLgAmount">$1959.00</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/275426269_491991895747233_843183024535462843_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Jg01zrsqt0cQ7kNvgF-tgX1&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=An2Y8vrTu4_9ra99Zq-U073&oh=00_AYDIMD1nBDVon-Ysc_Tzc17w2UGYGIxjupVpK6CiVvh3tA&oe=674796F0" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Icons Anime</span>
                    </td>
                    <td className="widgetLgDate">23 Nov 2024</td>
                    <td className="widgetLgAmount">$1959.00</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/275426269_491991895747233_843183024535462843_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Jg01zrsqt0cQ7kNvgF-tgX1&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=An2Y8vrTu4_9ra99Zq-U073&oh=00_AYDIMD1nBDVon-Ysc_Tzc17w2UGYGIxjupVpK6CiVvh3tA&oe=674796F0" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Icons Anime</span>
                    </td>
                    <td className="widgetLgDate">23 Nov 2024</td>
                    <td className="widgetLgAmount">$1959.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/275426269_491991895747233_843183024535462843_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Jg01zrsqt0cQ7kNvgF-tgX1&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=An2Y8vrTu4_9ra99Zq-U073&oh=00_AYDIMD1nBDVon-Ysc_Tzc17w2UGYGIxjupVpK6CiVvh3tA&oe=674796F0" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Icons Anime</span>
                    </td>
                    <td className="widgetLgDate">23 Nov 2024</td>
                    <td className="widgetLgAmount">$1959.00</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/275426269_491991895747233_843183024535462843_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Jg01zrsqt0cQ7kNvgF-tgX1&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=An2Y8vrTu4_9ra99Zq-U073&oh=00_AYDIMD1nBDVon-Ysc_Tzc17w2UGYGIxjupVpK6CiVvh3tA&oe=674796F0" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Icons Anime</span>
                    </td>
                    <td className="widgetLgDate">23 Nov 2024</td>
                    <td className="widgetLgAmount">$1959.00</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
            </table>
        </div>
    )
}