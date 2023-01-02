import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useState("");
  function name(id) {
    setUser(id);
  }
  return (
    <>
      <div className="header">
        <ul className="nav">
          <li className="nav-item it">
            <Link className="nav-link" to="/">
              Главное
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reservations">
              Бронирование
            </Link>
          </li>
        </ul>

        <ul className="register">
          <li className="nav-item user">
            <Link className="nav-link" to="/login">
              Вход/Регистрация
            </Link>
            {/* <div onClick={() => name(1)}>
              <a className="nav-link a">User</a>{" "}
              <div className="user-icons"></div>
            </div> */}
          </li>
        </ul>
      </div>

      <div className={"test " + (user === 1 ? "active" : "")}>
        <div className="test5">
          <table>
            <tbody>
              <tr>
                <td className="float-l">Общий зароботок :</td>
                <td className="float-r">75876</td>
              </tr>
              <tr>
                <td className="float-l">Зароботок наличкой :</td>
                <td className="float-r">45333</td>
              </tr>
              <tr>
                <td className="float-l">Зароботок переводом : </td>
                <td className="float-r">34990</td>
              </tr>
              <tr>
                <td className="float-l">Личный зароботок : </td>
                <td className="float-r">14876</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="test3">
          <li className="test2">Аренда</li>
          <li className="test2">Статистика</li>
          <li className="test2">Выход</li>
        </ul>
      </div>
      <div className="test">
        <ul className="test3">
          <li className="test2">Выход</li>
        </ul>
      </div>
      <div className="test">
        <ul className="test3">
          <li className="test2">Аренда</li>
          <li className="test2">Выход</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
