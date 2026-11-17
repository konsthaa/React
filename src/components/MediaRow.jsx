import {Link} from 'react-router';

const MediaRow = ({item, setSelectedItem}) => {
  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>{item.username}</td>
      <td>
        <button type="button" onClick={() => setSelectedItem(item)}>
          Preview
        </button>
        <Link to="/single" state={item}>
          Display
        </Link>
      </td>
    </tr>
  );
};

export default MediaRow;
