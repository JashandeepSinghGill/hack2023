import React from 'react';
import Image from 'next/image';
import LoadingComponent from './LoadingChatDots';
const ResponseMsg = ({ message }: any) => {
  const attractions = message.split('\n').slice(2);
  console.log(attractions)
  if(message === "....."){
    return(<p>.....</p>)
  }

  const attractionsNE = attractions.filter((attraction: any) => {
  return attraction !== undefined && attraction !== null && attraction !== '' && attraction !== '/n';
});

  return (
    <ul>
      {attractionsNE.map((attraction: any, index: any) => {
        return (
          <p key={index}>
            {attraction}
            <br />
          </p> 
        );
      })}
    </ul>
  );
};

export default ResponseMsg;

