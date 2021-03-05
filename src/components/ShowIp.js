import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'


function ShowIp({ ip }) {

    console.log(ip);
    return (
        <div style={{ margin: "1em" }}>
            <Jumbotron fluid >
                <Container>
                    <h1>here is your IP. take care of it ;)</h1>
                    <p>
                        {ip}
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}



export default ShowIp

