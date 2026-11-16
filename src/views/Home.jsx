import MediaRow from '../components/MediaRow';
import {useState, useEffect} from 'react';
import fetchData from '../utils/fetchData';
import SingleView from '../components/SingleView';
// import TempCounter from './TempCounter';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API;

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const media = await fetchData.fetchData(`${MEDIA_API}/media`);

        const mediaWithUsers = await Promise.all(
          media.map(async (item) => {
            const user = await fetchData.fetchData(
              `${AUTH_API}/users/${item.user_id}`,
            );
            return {...item, username: user.username};
          }),
        );

        setMediaArray(mediaWithUsers);
      } catch (error) {
        console.error('Failed to fetch media:', error);
      }
    };
    getMedia();
  }, []);

  console.log(mediaArray);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Owner</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
      {selectedItem && (
        <SingleView item={selectedItem} setItem={setSelectedItem} />
      )}
    </>
  );
};
export default Home;
