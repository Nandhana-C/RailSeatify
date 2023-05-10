import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

function Dashboard() {

  const {userDb} = useAuth();
    const router = useRouter();

    useEffect(() => {
        router.push(`/dashboard/${userDb.id}`)
    },[userDb, router])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard