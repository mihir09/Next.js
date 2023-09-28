import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
    // console.log(sortOrder)

    return (
        <>
            <h1>Users</h1>
            {/* <p>{new Date().toLocaleTimeString()}</p> */}
            <Link href="/users/new" className='btn'>New Users</Link>

            <Suspense>
                <UserTable sortOrder={sortOrder} />
            </Suspense>
        </>
    )
}

export default UsersPage