import React from 'react'

function header({to}) {

   
  /* return <div>header {to}</div> */

    return React.createElement("div", null, `header ${to}`)

}

export default header