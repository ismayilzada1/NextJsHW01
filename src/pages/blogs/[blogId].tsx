import {useRouter} from 'next/router'
import React from 'react'

export default function BlogDetails() {
    const {query} = useRouter()

    return (
        <div>
            <h1>BlogDetails if is - {query.blogId}</h1>
        </div>
    )
}
