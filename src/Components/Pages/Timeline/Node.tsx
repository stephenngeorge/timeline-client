import React from 'react'

import { INode } from '../../../interfaces'

const Node: React.FC<INode> = props => {
    return (
        <div>
            <p>{ props.title }</p>
            { props.description.length > 0 && <p>{ props.description }</p> }

            <hr />
        </div>
    )
}

export default Node