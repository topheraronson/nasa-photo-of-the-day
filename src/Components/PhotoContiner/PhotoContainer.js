import React, {useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'

import Photo from './Photo'
import Description from './Description'

//import data from '../../MockData'

const PhotoContainer = (props) => {

    const [imageURL, setImageURL] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')

    const effectsCallback = () => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=ZXqjobmyKgT6etWmihwNSwGOjSvqicO3fchjChg3')
            .then(res => {
                setImageURL(res.data.url)
                setDescription(res.data.explanation)
                setTitle(res.data.title)
            })
            .catch(error => console.log(error))
    }
    useEffect(effectsCallback, [])

    return (
        <Container>
            <Row>
                <h2>{title}</h2>
            </Row>
            
            <Row>
                <Col md={6}>
                    <Description description={description} />
                </Col>
                <Col md={6}>
                    <Photo url={imageURL} />
                </Col>
            </Row>
        </Container>
    )
}

export default PhotoContainer