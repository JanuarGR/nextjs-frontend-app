
import { useRouter } from 'next/router';
import React from 'react'

export default function AboutDetail() {
  const router = useRouter();
  const {id} = router.query;
  
    return <div>About Detail : {id}</div>
}
