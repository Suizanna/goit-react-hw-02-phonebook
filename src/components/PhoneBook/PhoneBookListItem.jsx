const PhoneBookListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li>
      <p>Name:{name}</p>
      <p>Number:{number}</p>
      <button onClick={onDeleteContact} id={id}>
        Delete
      </button>
    </li>
  );
};

export default PhoneBookListItem;
