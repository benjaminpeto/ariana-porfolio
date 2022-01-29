import React from 'react';
import { useParams } from 'react-router-dom';

const TopicPage = ({topicData}) => {
  const { title } = useParams();
  
  return (
    <>
      <h2 style={{ paddingTop:'100px'}}>topicxxxxx</h2>
        <ul>
          {topicData.filter(topic => topic.title === title).map(filteredTopic => 
            <div key={filteredTopic.id}>
              <h1>{filteredTopic.title}</h1>
              <h4>{filteredTopic.subtitle}</h4>
              <p>{filteredTopic.description}</p>
            </div>
          )}
        </ul>
    </>
  );
}

export default TopicPage;