const SingleView = ({item, setSelectedItem}) => {
  return (
    <dialog open>
      <h3>{item.title}</h3>

      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.description} />
      ) : (
        <video controls>
          <source src={item.filename} />
        </video>
      )}

      <p>{item.description}</p>
      <button onClick={() => setSelectedItem(null)}>Close</button>
    </dialog>
  );
};
export default SingleView;
