import React from 'react'
import Topbar from '../pagecomponents/Topbar'
import { useRouter } from 'next/router';
const Deleteclient = () => {
    const router = useRouter();

  return (
    <div>
      <Topbar></Topbar>
      <button class="button button-back" onClick={() => router.back()}>Back</button>

    </div>
  )
}

export default Deleteclient
