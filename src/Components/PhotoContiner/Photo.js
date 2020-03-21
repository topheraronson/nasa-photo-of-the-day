import React from 'react'

const Photo = (props) => {
    return (
        <div>
            <img src={props.url} alt='Nasa APOD' />
        </div>
    )
}

export default Photo