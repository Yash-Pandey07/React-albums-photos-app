import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PhotoList.css';

const PhotoList = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

 // Use jsonplaceholder API to fetch photos for the given album id
 useEffect(() => {
    setLoading(true); // Set loading to true before the fetch call
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then(response => response.json())
      .then(data => {
        setPhotos(data); // Set the fetched photos
        setLoading(false); // Stop loading once the data is received
      })
      .catch(err => {
        setError(err.message); // Capture any errors
        setLoading(false); // Stop loading if an error occurs
      });
  }, [id]);

//for unsplash api
//create a profile on unsplash and store the key in new file as .env and save your key there :
//REACT_APP_UNSPLASH_API_KEY=your_unsplash_api_key_here

// useEffect(() => {
//     const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY; // Secure API Key
//     setLoading(true);
//     fetch(`https://api.unsplash.com/collections/${id}/photos?client_id=${apiKey}`)
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data)) {
//           setPhotos(data); // Make sure `data` is an array
//         } else {
//           setPhotos([]); // Fallback to empty array if data is not an array
//         }
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [id]);


  if (loading) return <p>Loading photos...</p>;
  if (error) return <p>Error loading photos: {error}</p>;

  return (
    <div className="photo-list">
      <button onClick={() => navigate(-1)} className="back-button">Back</button>
      <h2>Photos in Album {id}</h2>
      <div className="photos-container">
        {photos.map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
