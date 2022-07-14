import React from "react";
import Qualitie from "./qualitie"
import BookMark from "./bookmark";

const User = ({_id, name, completedMeetings, rate, profession, qualities, bookmark, onDelete, onBookMark}) => {
   return  (
        <tr>
            <td>{name}</td>
            <td>{qualities.map((item) => (<Qualitie key={item._id} {...item}/>))}</td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} / 5</td>
            <td>{<BookMark status={bookmark} onClick={() => onBookMark(_id)} />}</td>
            <td>
                <button onClick={() => onDelete(_id)} className="btn btn-danger">delete</button>
            </td>
        </tr>
    )
      
}

export default User;
