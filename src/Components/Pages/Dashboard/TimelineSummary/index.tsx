import React, { useEffect, useState } from 'react'
// query imports
import { nodeQueries } from '../../../../queries'

import { INode } from '../../../../interfaces'

interface ITimelineSummaryProps { timelineId: string }

const TimelineSummary: React.FC<ITimelineSummaryProps> = ({timelineId}) => {
    const [fetchedNodes, setFetchedNodes] = useState<INode[]>([])

    const fetchNodes = async (id: string) => {
        const nodes = await nodeQueries.fetchNodes(id)
        setFetchedNodes(nodes.data)
    }
    useEffect(() => {
        fetchNodes(timelineId)
    }, [timelineId])

    const pendingNodes = fetchedNodes.filter(node => node.status === 'PENDING')
    const completedNodes = fetchedNodes.filter(node => node.status === 'COMPLETE')
    const problemNodes = fetchedNodes.filter(node => node.status === 'PROBLEM')


    return (
        <div>
            {pendingNodes.length}
            {completedNodes.length}
            {problemNodes.length}
        </div>
    )
}

export default TimelineSummary