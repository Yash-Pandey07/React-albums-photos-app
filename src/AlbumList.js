import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading albums...</p>;
  if (error) return <p>Error loading albums: {error}</p>;

  return (
    <div className="album-list">
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/album/${album.id}`}>
              Album {album.id} - {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
