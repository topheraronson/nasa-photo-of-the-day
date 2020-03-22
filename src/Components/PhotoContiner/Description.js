import React from 'react'
import styled from 'styled-components'

const Description = (props) => {


    const Description = styled.div`
        width: 45%;
        height: auto;
        padding: 3%;
        line-height: 1.6rem;
        text-align: left;
    `

    return (
        <Description>
        <p>{props.description}</p>
        </Description>
    )
}

export default Description