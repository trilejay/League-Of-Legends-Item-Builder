import React, { useState } from 'react';
import SortWinRate from './SortWinRate';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [scrapedData, setScrapedData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScrape = async () => {
    try {
      setLoading(true);

      const encodedURL = encodeURIComponent(inputValue);
      const response = await fetch(`http://127.0.0.1:5000/api/scrape?url=${encodedURL}`, {
        mode: 'cors',
      });


      if (!response.ok) {
        throw new Error(`Network response error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const filteredData = data.scraped_data.filter(build => build.length > 1);
      setScrapedData(filteredData);
      setError('');
    } catch (error) {
      console.error('Error:', error.message);
      setScrapedData([]);
      setError('Error fetching data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };

  return (
    <div>
      <h1>ARAM Builder!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a URL"
      />
      <button onClick={handleScrape}>Scrape</button>
      {scrapedData.length > 0 && <SortWinRate data={scrapedData} setData={setScrapedData} />}
      <div>
        {loading && <p>Loading recommended builds...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <h2>Your Build:</h2>
        <table>
          <thead>
            <tr>
              <th>Build</th>
              <th>Items</th>
              <th>
                Win Rate
                {scrapedData.length > 0 && <SortWinRate data={scrapedData} setData={setScrapedData} />}
              </th>
              <th>Games Played</th>
            </tr>
          </thead>
          <tbody>
            {scrapedData.map((build, index) => (
              <tr key={index}>
                <td>Build {index + 1}</td>
                <td>{build.slice(1, -2).join(', ')}</td>
                <td>
                  <div>{`${build[build.length - 1]}%`}</div>
                  <div>{build[build.length - 2]}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;


/*

import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [scrapedData, setScrapedData] = useState([]);
  const [error, setError] = useState('');

  const handleScrape = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/scrape?url=${inputValue}`, {
        mode: 'cors', // Enable CORS
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      // Filter out empty builds
      const filteredData = data.scraped_data.filter(build => build.length > 1);
      setScrapedData(filteredData);
      setError('');
    } catch (error) {
      console.error('Error:', error.message);
      setScrapedData([]);
      setError('Error fetching data: ' + error.message);
    }
  };

  return (
    <div>
      <h1>ARAM Build</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a URL"
      />
      <button onClick={handleScrape}>Scrape</button>
      <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <h2>Scraped Data:</h2>
        <table>
          <thead>
            <tr>
              <th>Build</th>
              <th>Items</th>
              <th>Win Rate</th>
              <th>Games Played</th>
            </tr>
          </thead>
          <tbody>
            {scrapedData.map((build, index) => (
              <tr key={index}>
                <td>Build {index + 1}</td>
                <td>{build.slice(1, -2).join(', ')}</td>
                <td>{build[build.length - 1]}</td>
                <td>{build[build.length - 2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
*/