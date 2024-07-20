import React from 'react'

export const Navbar = () => {
    return (
        <div className='h-[24px]'>
            <nav>
                <ul className='flex w-screen justify-end gap-4 px-4 py-2'>
                    <li> <a href="/register"> Register </a></li>
                    <li> <a href="/login"> Login </a></li>
                </ul>
            </nav>
        </div>
    )
}