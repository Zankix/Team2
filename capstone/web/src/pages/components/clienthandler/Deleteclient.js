import React from 'react'
import Topbar from '../pagecomponents/Topbar'
import { useRouter } from 'next/router';
const Deleteclient = () => {
    const router = useRouter();

  return (
    <div>
      <Topbar></Topbar>
      <button onClick={() => router.back()}>Back</button>

    </div>
  )
}

export default Deleteclient
