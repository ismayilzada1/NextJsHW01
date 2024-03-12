import {Blog} from '@/types';
import React from 'react'

interface Props {
  blog: Blog
}

export default function BlogCard({blog}: Props) {
  const {title, id} = blog

  return (
    <div
      style={{
        backgroundColor: '#808080',
        padding: 12,
        borderRadius: 12,
        marginBottom: 20,
      }}>
      <h3
        style={{
          textAlign: 'center',
        }}>
        ID:${id}- {title}
      </h3>
    </div>
  )
}
