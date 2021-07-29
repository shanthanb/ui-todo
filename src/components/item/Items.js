import React, { useState } from 'react';

export const Items = ({ todo, isComplete = false }) => {

    const [checked, setChecked] = useState(isComplete)
    const handleCheck = () => setChecked(!checked)

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-1 d-flex justify-content-between">
                    <i className="bi bi-grip-vertical" />
                    <input
                        className="form-check-input"
                        type="checkbox" value=""
                        checked={checked}
                        id="flexCheckDefault"
                        onChange={handleCheck}
                    />
                </div>
        
        <div className="col-7">
            
             {
                   isComplete ?
                (
                    <div className="d-flex align-items-center">
               
                    <h5 className="me-2 text-decoration-line-through" style={{ fontSize: 14, color: 'black' }}>{todo.title}</h5>
                    <div className="bullet rounded-circle me-2" style={{ backgroundColor: 'gray' }} />
                    <span className="ms-2" style={{ fontSize: 12, color: '#CED4DA' }}>{todo.due}</span>
                 
                    </div>
                )   
                           
                           :
                            
                ( 
                <>
                <div className="d-flex">
                        <h5 style={{ fontSize: 14, color: '#rgb(73,80,87)' }}>{todo.title}</h5>
                </div>
                        
                <div className="d-flex">
                        <p style={{ fontSize: 11, color: '#ADB5BD' }}>{todo.description}</p>
                        <p style={{color: 'blue', fontSize:11, cursor:'pointer'}}>&nbsp;Read more</p>
                </div>
                               
                <div className="d-flex align-items-center">
                        <div className="rounded-circle bullet" style={{ backgroundColor: 'green' }} />
                        <span className="ms-2" style={{ fontSize: 10, color: '#CED4DA' }}>{todo.due}</span>
                </div>
                 </>               
               )
                    }

                </div>
                
                <div className="col-2">
                    {
                        !isComplete &&
                        <div className="dropdown">
                            <button className="btn btn-sm dropdown-btn d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Edit
                               
                         <div>
                             <i className="bi bi-caret-down-fill ms-2" style={{ fontSize: 10 }} />
                         </div>
                            </button>
                           
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li style={{ fontSize: 12 }}><a className="dropdown-item" href="#">Delete</a></li>
                                <li style={{ fontSize: 12 }}><a className="dropdown-item" href="#">Duplicate</a></li>
                                <li style={{ fontSize: 12 }}><a className="dropdown-item" href="#">Add reminder</a></li>
                                <li style={{ fontSize: 12 }}><a className="dropdown-item" href="#">Add comment</a></li>
                            </ul>
                        
                        </div>
                    }

                </div>
            </div>
            {
                !isComplete && <div className="my-4 container">
                    <hr style={{ color: 'lightgray' }} />
                </div>
            }
        </div>
    )
}

export default Items;