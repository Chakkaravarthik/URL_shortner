import React, { useState } from 'react';
import { shorturl } from '../../apis/auth.js';

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShortenUrl = async () => {
    const result = await shorturl(longUrl);
    setShortUrl(result.shorturl);

  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">URL Shortener</h5>
          <div className="mb-3">
            <label htmlFor="longUrl" className="form-label">Long URL</label>
            <input
              type="text"
              className="form-control"
              id="longUrl"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Enter the long URL"
              name="longurl"
            />
          </div>
          <button className="btn btn-primary" onClick={handleShortenUrl}>
            Create Short URL
          </button>
          {shortUrl && (
            <div className="mt-3">
              <label htmlFor="shortUrl" className="form-label">Short URL</label>
              <input
                type="text"
                name="shorturl"
                className="form-control"
                id="shortUrl"
                value={shortUrl}
                readOnly
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UrlShortener;
