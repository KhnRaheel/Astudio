import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          style={{
            backgroundColor: activeTab === tab ? '#c0e3e5' : '#ebebeb',
            color: activeTab === tab ? '#322625' : '#000',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;