import { useState } from 'react';
import './treeItems.css';

const TreeItems = ({items}) => {
    let initalDisplayChilds = new Array(items.length).fill().map(()=> false);
    const [displayChildItems, setDisplayChildItems] = useState(initalDisplayChilds);

    function ChangeStatuDisplay(indexChanging) {
        const newStatus = displayChildItems.map((item, index) => {
            if(indexChanging===index){
                return !item;
            }
            else {
                return item;
            }
        });

        setDisplayChildItems(newStatus);
    }

    return (
        <ul className='treeViewContainer'>
            { items.map((item, index) => 
                <li key={item.id} className='treeViewItem' style={{backgroundColor: Math.random().toString(16).substr(-6)}}>
                    <div>
                        { item['childs'] !== undefined && item['childs'].length > 0 && 
                            <i onClick={ ()=>{ChangeStatuDisplay(index)} }
                                className={ displayChildItems[index] ? 'bi bi-caret-down-square' : 'bi bi-caret-right-square' }
                            />
                        }
                        <span> {item.name}</span>
                        <button  type="button" class="btn btn-outline-danger" style={{marginLeft: "20px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                            </svg>
                        </button>
                        { item['childs'] !== undefined && item['childs'].length > 0 && displayChildItems[index] &&
                            <TreeItems items={item.childs} />
                        }
                    </div>
                </li>
            ) }
        </ul>
    );
}

export default TreeItems;