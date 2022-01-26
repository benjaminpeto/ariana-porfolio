import React from 'react';
import { useParams } from 'react-router-dom';

import { topicData } from './topicData';

function TopicPage() {
  let { topic } = useParams();
  return (
    <div>
      <h1>{topic.toUpperCase().replace(/-/g , ' ')}</h1>
      {
        topicData.map((data) => (
          <div key={data.id}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default TopicPage;
