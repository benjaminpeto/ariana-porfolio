import React from 'react';
import { useLocation } from 'react-router-dom';

import './TopicPage.styles.scss';

const TopicPage = ({ topicData }, props) => {
  const location = useLocation();

  return (
    <div className='topic-page-container'>
      {
        topicData.filter(match => location.pathname === match.path).map(topic => 
          <div key={topic.id}>
            <h1>{topic.title}</h1>
            <h3>{topic.subtitle}</h3>
            <p>{topic.description}</p>
            {
              topic.images.map((img, idx) => (
                <img key={idx} alt='' src={img} className='responsive'/>
              ))
            }
          </div>
      )}
    </div>
  );
}

export default TopicPage;

//* INDIVIDUAL PAGES FOR THE DESIGNS */