const getUrls = () => {
  return fetch('http://localhost:300/api/v1/urls')
      .then(res => {
        if(res.ok){
          return res.json()
        } else{
          throw new Error('Information connection Whoops')
        }
      })
}

const placeUrls = (urlObj) => {
  return fetch('http://localhost:3001/api/v1/urls', {
  method:'POST',
  body:JSON.stringify(urlObj),
  headers:{
    'Content-Type': 'application/json'
  }
  })
  .then((res) => {
    if(res.ok){
      return res.json()
    }else{
      throw new Error('server contact whoops try again later')
    }
  })
}

export {getUrls, placeUrls} 

