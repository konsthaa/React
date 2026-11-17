const SingleView = ({item, setSelectedItem}) => {
  return (
    <dialog open>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Owner: {item.username}</p>
      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.description || item.title} />
      ) : (
        <video controls>
          <source src={item.filename} type={item.media_type} />
        </video>
      )}
      <button type="button" onClick={() => setSelectedItem(null)}>
        Close
      </button>
    </dialog>
  );
};

export default SingleView;
