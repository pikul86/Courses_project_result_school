import React from 'react';
import Qualitie from "./qualitie";
import BookMark from "./bookmark";


const User = ({_id, qualities, profession, completedMeetings, rate, name, bookmark, onBookMark, onDelete}) => {
   return <tr>
        <td>{name}</td>
        <td>{qualities.map((item) => <Qualitie key={item._id} {...item}/>
        )}</td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate} / 5</td>
       <td><BookMark status={bookmark} toggleBook={onBookMark} id={_id}/></td>
        <td>
            <button className='btn btn-danger' onClick={() => onDelete(_id)}>
                delete</button>
        </td>
    </tr>
}
export default User;