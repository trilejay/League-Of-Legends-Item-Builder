import React from 'react';

const SortWinRate = ({ data, setData }) => {
  const handleSortByWinRate = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      const winRateA = parseFloat(a[a.length - 1].split('%')[0]);
      const winRateB = parseFloat(b[b.length - 1].split('%')[0]);
      return winRateB - winRateA;
    });

    setData(sortedData);
  };

  return (
    <button onClick={handleSortByWinRate}>Sort</button>
  );
};

export default SortWinRate;
