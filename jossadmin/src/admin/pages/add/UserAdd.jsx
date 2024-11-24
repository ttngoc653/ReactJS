import { userRows } from "../../../dummyData";
import "./add.css";

export const UserAdd = () => {
    const userFirst = userRows[0];

    return (
        <div className="addContainer">
            <h1 className="addTitle">Create user</h1>
            <form className="addForm">
                <div className="addItem">
                    <label>First name</label>
                    <input type="text" placeholder={userFirst.firstName} />
                </div>
                <div className="addItem">
                    <label>Last name</label>
                    <input type="text" placeholder={userFirst.lastName} />
                </div>
                <div className="addItem">
                    <label>Age</label>
                    <input type="text" placeholder={userFirst.age} />
                </div>
                <div className="addItem">
                    <label>Email</label>
                    <input type="email" placeholder={userFirst.email} />
                </div>
                <div className="addItem" style={{ width: '100%', alignItems: "center" }}>
                    <button className="createButton addCreateButton">Create</button>
                </div>
            </form>
        </div>
    )
}

export default UserAdd;