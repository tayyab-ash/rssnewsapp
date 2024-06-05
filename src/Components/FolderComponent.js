import React from 'react'
import { useParams } from 'react-router-dom';

function FolderComponent() {
    const { id } = useParams();
    return <div>Item: {id}</div>;
}

export default FolderComponent