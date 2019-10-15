import React, { useState, FunctionComponent } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
// import { Router, Link } from "@reach/router";
import { add_user } from "../../redux/action_creators/actions.js";

const userSuccess = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "green"
  }
};

const emailFail = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "red"
  }
};

const searchParams: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string | null>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [id, setId] = useState(0);
  const [modalSucessIsOpen, setModalSuccessIsOpen] = useState(false);
  const [modalDuplicateEmailOpen, modalSetDuplicateEmailOpen] = useState(false);
  const [users, setUsers] = useState<{
    id: number;
    name: string;
    password: string;
    email: string | null;
  }>([]);

  const saveUser = () => {
    if (users.some(user => user.email === email)) {
      return duplicateEmail();
    }
    dispatch(add_user({ name, password, email }));
    authenticate();
  };

  const duplicateEmail = () => {
    modalSetDuplicateEmailOpen(true);
    return setTimeout(() => modalSetDuplicateEmailOpen(false), 1000);
  };

  const authenticate = () => {
    setModalSuccessIsOpen(true);
    setTimeout(() => setModalSuccessIsOpen(false), 1000);
  };

  return (
    <div>
      <Modal
        isOpen={modalSucessIsOpen}
        ariaHideApp={false}
        style={userSuccess}
        contentLabel="User Successful"
      >
        User Succesfully Added
      </Modal>
      <Modal
        isOpen={modalDuplicateEmailOpen}
        ariaHideApp={false}
        style={emailFail}
        contentLabel="User Successful"
      >
        <h1>Duplicate Email</h1>
        Please Enter another Email
      </Modal>
      <h3>Add User</h3>
      <form
        onSubmit={event => {
          event.preventDefault();
          saveUser();
          setId(id + 1);
        }}
      >
        <input
          className="name"
          id="name"
          value={name}
          placeholder="name"
          onChange={event => {
            setName(event.target.value);
          }}
          required
        />
        <input
          className="password"
          id="password"
          value={password}
          placeholder="password"
          onChange={event => {
            setPassword(event.target.value);
          }}
          required
        />
        <input
          className="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={event => {
            setEmail(event.target.value);
          }}
          type="email"
          required
        />
        {/* <Link to={"/showUsers"}> */}
        <button type="submit">Submit</button>
        {/* </Link> */}
      </form>
      <div>
        {users.map(user => (
          <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.password}</li>
            <li>{user.email}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default searchParams;
