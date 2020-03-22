import React from 'react'
import styled from 'styled-components'

const Photo = (props) => {

    const Photo = styled.div`
        width: 50%;
        height: auto;
        background-image: url(${props => props.url});
        background-size: cover;
        background-color: white;
    `

    return (
        <Photo url={props.url}>
        </Photo>
    )
}

export default Photo