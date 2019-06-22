import './summary.css'

import React, { useEffect, useState } from 'react'
// query imports
import { nodeQueries } from '../../../../queries'

import { INode } from '../../../../interfaces'

interface ITimelineSummaryProps { timelineId: string }

const TimelineSummary: React.FC<ITimelineSummaryProps> = ({timelineId}) => {
    const [fetchedNodes, setFetchedNodes] = useState<INode[]>([])

    // get all nodes for given timeline
    const fetchNodes = async (id: string) => {
        const nodes = await nodeQueries.fetchNodes(id)
        setFetchedNodes(nodes.data)
    }
    useEffect(() => {
        fetchNodes(timelineId)
    }, [timelineId]) // <-- effect runs whenever timeline id changes
    
    // nodes are organised by status
    const pendingNodes = fetchedNodes.filter(node => node.status === 'PENDING')
    const completedNodes = fetchedNodes.filter(node => node.status === 'COMPLETE')
    const problemNodes = fetchedNodes.filter(node => node.status === 'PROBLEM')

    return (
        <div>
            <div className='summary-nodes-container' id='pending-nodes'>
                {
                    pendingNodes.length > 0 &&
                    pendingNodes.map(node => <div key={ node._id } className='summary-node node-pending'></div>)
                }
            </div>
            <div className='summary-nodes-container' id='completed-nodes'>
                {
                    completedNodes.length > 0 &&
                    completedNodes.map(node => <div key={ node._id } className='summary-node node-completed'></div>)
                }
            </div>
            <div className='summary-nodes-container' id='problem-nodes'>
                {
                    problemNodes.length > 0 &&
                    problemNodes.map(node => <div key={ node._id } className='summary-node node-problem'></div>)
                }
            </div>
        </div>
    )
}

export default TimelineSummary