import React from 'react'
import ShowIp from './ShowIp'
import ShowLocation from './ShowLocation'

function Main({ response }) {

    const { ip, location } = response;
  
    return (
        <div>
            <ShowIp ip={ip} />
            <ShowLocation location={location} />
        </div>
    )
}

export default Main

