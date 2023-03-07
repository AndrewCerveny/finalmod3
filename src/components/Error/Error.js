import React from "react";

const Error = (message) => {

    return(
  <section className="error-mess">
    <h2>DANG!! Something didn't work properly!! 😅 </h2>
    <h2> {message} </h2>
  </section>
    )
}
export default Error;