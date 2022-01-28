import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { topicData } from './topicData';

const TopicPage = (props) => {
  const [topic, setTopic] = useState([topicData]);
  let params = useParams();

  const getTopic = () =>{
    if(params.topic){
      const res = params.topic;
      let data;
      [...topic].forEach(item => {
        for( const key in item ) {
          if(res === item[key].id){
            data = item[key];
          }
        }
      })
      console.log('found DaTA---->', data);
      setTopic(data);
    }
  };
  
  useEffect(() => {
    getTopic(props);
  });
  
  return (
    <div {...props} params={params}>
    {
      topic.map((item, idx) => (
        <div key={idx}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))
    }
    </div>
  );
}

export default TopicPage;