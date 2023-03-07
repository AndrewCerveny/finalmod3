import React from 'react';
import './UrlContainer.css';


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
   
 
  
    return (
      <section>
        {urlEls.length && !error ? urlEls : <p>No urls yet! Find some to shorten!</p> }
        {!urlEls.length && error ? <p>{error} Could not connect!`</p>:null}
      </section>
    )
}
  



export default UrlContainer;
