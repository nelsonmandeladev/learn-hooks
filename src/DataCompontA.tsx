import React from 'react'
import { useShareContent } from './hooks/useShareContent'

export default function DataCompontA() {
    const { shareData } = useShareContent()
    return (
        <div>
            <p>Share data from A: {shareData}</p>
        </div>
    )
}
