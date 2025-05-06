import React, { use } from 'react'
import {useRouteError} from 'react-router-dom'

function Error() {
    // const err = useRouteError()
    const {status,statusText} = useRouteError()
  return (<>
    <div>Error</div>
    {/* <h2>{err.status +": "+ err.statusText}</h2> */}
    <h2>{status +": "+ statusText}</h2>
  </>

  )
}

export default Error