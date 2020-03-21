import React, {useState, useEffect } from 'react'
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
        <div>
            <h2>{title}</h2>
            <Photo url={imageURL} />
            <Description description={description} />
        </div>
    )
}

export default PhotoContainer