import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import Main from './Main'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap'

function App(props) {
    const [url, setUrl] = useState("https://geo.ipify.org/api/v1?apiKey=at_76ypd93M1LfDLfE6w7t4RIPoMt1I5");
    const [response, setResponse] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setResponse(json))
            .catch(e => console.log('Request failed: ', e));
        // return () => {

        // }
    }, [url])


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1em" }}>
            <NavBar />
            {response ? <Main response={response} /> : <h3> <Spinner animation="border" variant="light" /></h3>}
        </div>
    )
}

// App.propTypes = {

// }

export default App

