import {Link, useLocation, useNavigate} from 'react-router';
import {useUser} from '../hooks/apiHooks';
import {useState} from 'react';

const Single = () => {
  const {getUserInformation} = useUser();
  const [owner, setOwner] = useState(null);
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

  const getUser = async () => {
    try {
      const user = await getUserInformation(item.user_id);
      setOwner(user);
    } catch (error) {
      console.error('Failed to fetch user information:', error);
    }
  };

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
      <button onClick={getUser}>Get owner information</button>
      {owner && (
        <p>
          Email: {owner.email}, User level: {owner.level_name}
        </p>
      )}
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Single;
