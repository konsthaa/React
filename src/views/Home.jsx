import MediaRow from '../components/MediaRow';
import {useState, useEffect} from 'react';
import fetchData from '../utils/fetchData';
import SingleView from '../components/SingleView';
// import TempCounter from './TempCounter';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      // haetaan ensin pelkkä metadata
      const json = await fetchData('test.json');
      setMediaArray(json);
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
