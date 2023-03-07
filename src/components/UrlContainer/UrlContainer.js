import React from 'react';
import './UrlContainer.css';
import Error from '../Error/Error';

const UrlContainer = ({urls,error}) => {
  const urlEls = urls.map(url => {
    return (
      <div className="url" key={url.id}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });
   
  if(error){
    return <Error message={error}/>
  }else{
    return (
      <section>
        { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
      </section>
    )
  }
  

}

export default UrlContainer;
