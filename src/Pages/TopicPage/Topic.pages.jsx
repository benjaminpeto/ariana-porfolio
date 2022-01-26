import React from 'react';
import { useParams } from 'react-router-dom';

function TopicPage() {
  let { topic } = useParams();
  return (
    <div>
      this is the topic of {topic}
    </div>
  );
}

export default TopicPage;
