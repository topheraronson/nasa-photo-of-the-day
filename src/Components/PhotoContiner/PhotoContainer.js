import React, {useState, useEffect } from 'react'
import axios from 'axios'

import Photo from './Photo'
import Description from './Description'
import styled from 'styled-components'

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

    const Container = styled.div`
        display: flex;
        width: 80%;
        justify-content: center;
        margin: 0 auto;
    `

    return (
        <div>
            <h2>{title}</h2>
            <Container>
                <Description description={description} />
                <Photo url={imageURL} />
            </Container>
            
        </div> 
    )
}

export default PhotoContainer