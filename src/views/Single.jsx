import {Link, useLocation, useNavigate} from 'react-router';

const Single = () => {
  const navigate = useNavigate();
  const item = useLocation().state;

  if (!item) {
    return (
      <>
        <h2>Media item unavailable</h2>
        <Link to="/">Back to media</Link>
      </>
    );
  }

  return (
    <>
      <h2>Single media file</h2>
      <h3>{item.title}</h3>
      <p>Owner: {item.username}</p>
      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.description || item.title} />
      ) : (
        <video controls>
          <source src={item.filename} type={item.media_type} />
        </video>
      )}
      <p>{item.description}</p>
      <p>Created: {new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>Size: {item.filesize}</p>
      <p>Type: {item.media_type}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};


export default Single;
