import {useState} from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const {fileUrl, setFileUrl} = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Lähetetään;', file);
  };

  const handleFileChange = (event) => {
    const browserFile = event.target.files[0];
    console.log('Event:', event.target.files[0]);
    setFile(browserFile);
    setFileUrl(URL.createObjectURL(browserFile));
  };

  return (
    <>
      <h3>Upload Simple demo</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="fileinput"
          accept="image/*, video/*"
          onChange={handleFileChange}
        />
        <button type="submit">Lähetä</button>
      </form>

      { file && (
        <>
        <h2>Upattu tiedosto</h2>
        <img src={fileUrl} alt="upattu kuva" width={200} />
        </>
      )}
    </>
  );
};

export default Upload;
