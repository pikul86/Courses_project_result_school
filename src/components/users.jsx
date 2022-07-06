import React, { useState } from "react";
import api from "../api";
// const plural = require('plural-ru')

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    const table = document.querySelector(".table");
    switch (true) {
      case number === 0:
        table.style.display = "none";
        return (
          <span className="badge bg-danger">
            Никто с тобой не тусанет
          </span>
        );
      case number === 2 || number === 3 || number === 4:
        return (
          <span className="badge bg-primary">
            {number} человека тусанет с тобой сегодня
          </span>
        );
      default:
        return (
          <span className="badge bg-primary">
            {number} человек тусанет с тобой сегодня
          </span>
        );
    }
  };

  const renderQualities = (qualities) => {
    return qualities.map((item) => (
      <span key={item._id} className={"badge m-2 bg-" + item.color}>
        {item.name}
      </span>
    ));
  };

  const renderProfessions = (professions) => {
    return <span key={professions._id}>{professions.name}</span>;
  };

  const rendertable = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>
              {user.name}
        </td>
        <td>{renderQualities(user.qualities)}</td>
        <td>{renderProfessions(user.profession)}</td>
        <td>{user.completedMeetings}</td>
        <td>{<span>{user.rate} / 5</span>}</td>
        <td>
          <button onClick={() => handleDelete(user._id)} className="btn btn-danger">delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h2>{renderPhrase(users.length)}</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              Имя
            </th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{rendertable()}</tbody>
      </table>
    </>
  );
};

export default Users;
