import React from 'react'

import { INode } from '../../../interfaces'

const Node: React.FC<INode> = props => {
    return (
        <div>
            <p>{ props.title }</p>
        </div>
    )
}

export default Node