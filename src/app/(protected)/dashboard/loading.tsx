import Loader from '@/components/global/loader'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <Loader state>Loading ...</Loader>
    </div>
  )
}

export default loading