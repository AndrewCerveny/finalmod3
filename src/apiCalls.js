const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

const placeUrls = (urlObj) => {
  return fetch('http://localhost:3001/api/v1/urls', {
  method:'POST',
  body:JSON.stringify(urlObj),
  headers:{
    'Content-Type': 'application/json'
  }
  })
  .then((res) => res.json())
}

export {getUrls, placeUrls} 

// {id:number, long_url: "string", short Url: string, title: string}