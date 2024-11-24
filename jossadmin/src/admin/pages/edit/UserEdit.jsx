import './edit.scss';
import { userRows } from "../../../dummyData.js";
import { useParams } from 'react-router-dom';

export default function UserEdit() {
    const params = useParams();
    const user = userRows.find((item) => {
        return item.id==params.id
    });

    return (
        <div className="edit">
            <div className="editTitleContainer">
                <h1 className="editTitle">Edit user</h1>
                <button className="editCreateButton">Create</button>
            </div>
            <div className="editContainer">
                <div className="editShow">
                    <div className="editShowTop">
                        <img src={user.avatar} alt="" className="editShowImg" />
                        <div className="editShowTopTitle">
                            <span className="editShowFirstname">{user.firstName}</span>
                            <span className="editShowLastname">{user.lastName}</span>
                        </div>
                    </div>
                    <div className="editShowBottom">
                        <span className="editShowBottomTitle">User details</span>
                        <div className="editShowBottomInfo">
                            <i className="bi bi-person editShowBottomIcon"> Age:</i>
                            <span className="editShowBottomInfoTitle">{user.age}</span>
                        </div>
                        <span className="editShowBottomTitle">Contact details</span>
                        <div className="editShowBottomInfo">
                            <i className="bi bi-envelope editShowBottomIcon"> Email: </i>
                            <span className="editShowBottomInfoTitle">{user.email}</span>
                        </div>
                    </div>
                </div>
                <div className="editUpdate">
                    <div>
                        <span className="editUpdateTitle">Edit</span>
                        <form className="editUpdateForm">
                            <div className="editUpdateLeft">
                                <div className="editUpdateItem">
                                    <label>First name</label>
                                    <input type="text" placeholder={user.firstName} className="editUpdateInput" />
                                </div>
                                <div className="editUpdateItem">
                                    <label>Last name</label>
                                    <input type="text" placeholder={user.lastName} className="editUpdateInput" />
                                </div>
                                <div className="editUpdateItem">
                                    <label>Age</label>
                                    <input type="text" placeholder={user.age} className="editUpdateInput" />
                                </div>
                                <div className="editUpdateItem">
                                    <label>Email</label>
                                    <input type="text" placeholder={user.email} className="editUpdateInput" />
                                </div>
                            </div>
                            <div className="editUpdateRight">
                                <div className="editUpdateUpload">
                                    <img className="editUpdateImg" src={user.avatar} alt="" />
                                    <label htmlFor="file"><i className="bi bi-upload editUpdateIcon"></i></label>
                                    <input type="file" id="file" style={{display: "none"}} />
                                </div>
                                <button className="editUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}