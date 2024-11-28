import { useState } from 'react';
import { treeDatas } from '../../../dummyData';
import TreeItems from '../../components/treeItem/TreeItems'

export default function UserEdit() {
    const [menus, setMenus] = useState(treeDatas);
    return (
        <div className="edit">
            <div className="editTitleContainer">
                <h1 className="editTitle">Edit menu</h1>
            </div>
            <div className="editContainer">
                <div className='editShow'>

                </div>
                <div className='editUpdate'>
                    <div className="editTree">
                        <TreeItems items={menus} />
                    </div>
                </div>
            </div>
        </div>
    );
}