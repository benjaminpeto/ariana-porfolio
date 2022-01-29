import React from 'react';
import { useLocation } from 'react-router-dom';

const TopicPage = ({topicData}) => {
  const location = useLocation();

  return (
    <>
      {
        topicData.filter(match => location.pathname === match.path).map(topic => 
          <div key={topic.id} style={{padding:'100px 50px'}}>
            <h1 style={{fontSize:'45px', padding:'20px 50px'}}>{topic.title}</h1>
            <h4 style={{fontSize:'25px', padding:'20px 50px'}}>{topic.subtitle}</h4>
            <p style={{padding:'20px 50px'}}>{topic.description}</p>
          </div>
      )}
    </>
  );
}

export default TopicPage;

//* INDIVIDUAL PAGES FOR THE DESIGNS */