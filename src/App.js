import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowAddfriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddfriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((f) => (
        <Friend f={f} key={f.id} />
      ))}
    </ul>
  );
}

function Friend({ f }) {
  return (
    <li>
      <img src={f.image} alt={f.name} />
      <h3>{f.name}</h3>

      {f.balance < 0 && (
        <p className="red">
          Yow owe {f.name} {Math.abs(f.balance)}$
        </p>
      )}
      {f.balance > 0 && (
        <p className="green">
          {f.name} owes you {Math.abs(f.balance)}$
        </p>
      )}
      {f.balance === 0 && <p>You and {f.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <lable>👩🏼‍🤝‍🧑🏻 Friend name</lable>
      <input type="text" />

      <lable>🎴 Image URL</lable>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <lable>💰 Bill value</lable>
      <input type="text" />

      <lable>👤 Your expense</lable>
      <input type="text" />

      <lable>👩🏼‍🤝‍🧑🏻 X's expense</lable>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
