import React, { useState } from 'react'
import './notes.css'
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { BsThreeDotsVertical, BsFillPinAngleFill } from 'react-icons/bs';

const Notes = ({ noteItems, handleAddText, handleFavorite, handleDelete, handlePin }) => {
            
    const [footerDropDown, setFooterDropDown] = useState()
    console.log(footerDropDown)

    return (
        <div className="homeContainer">
            <div className="mainContainer">
                <h1 className="heading" style={{fontFamily:"Thasadith"}}>Sticky Notes</h1>
                <div className="notesContainerInner">
                    <div className="notes">
                        {noteItems.map((notes, index) => {
                            return (
                                <div className='noteContainer'>
                                    <div
                                        className="note"
                                        key={index}
                                        style={{ background: `${notes.color}` }}
                                    >
                                        <textarea
                                            className="textBox"
                                            type="text"
                                            defaultValue={notes.note}
                                            onChange={(e) => handleAddText(e, index)}
                                            placeholder="Write Something"
                                        />
                                        <div className="noteFooter">
                                            <div className=''>
                                                <img width="19" height="19" src="https://img.icons8.com/material-sharp/24/menu-2.png" alt="menu-2" size={25} onClick={()=>setFooterDropDown(index)} />
                                                {
                                                    notes.pinned ? <img width="14" height="14" src="https://img.icons8.com/forma-thin-filled/14/pin.png" alt="pin" />: null                                                }
                                            </div>
                                            {
                                                footerDropDown === index ? <div className='footerDropDown' onMouseLeave={()=>setFooterDropDown()}>
                                                <div className="" onClick={()=>{handleDelete(index);setFooterDropDown()}}>
                                                <img width="19" height="19" src="https://img.icons8.com/material-rounded/19/delete-forever.png" alt="delete-forever"/>
                                                </div>
                                                <div className='' onClick={()=>handlePin(notes.note, index)}>
                                                <img width="14" height="14" src="https://img.icons8.com/forma-thin-filled/14/pin.png" alt="pin"/>
                                                </div>
                                            </div> : null
                                            }
                                            <span>{notes.currDate}</span>
                                            <div className="" onClick={() => handleFavorite(index)} >
                                                {
                                                    
                                              notes.favorite ?  <img width="37" height="37" src="https://img.icons8.com/plasticine/37/star--v1.png" alt="star--v1"/>: <img width="37" height="37" src="https://img.icons8.com/carbon-copy/37/star.png" alt="star"/>

                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes