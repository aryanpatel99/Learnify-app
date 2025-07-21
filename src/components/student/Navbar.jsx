import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'


const Navbar = () => {
    const isCourseListPage = location.pathname.includes("/course-list")

    // for clerk
    const { openSignIn } = useClerk()
    const { user } = useUser();

    return (
        <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? "bg-white" : "bg-indigo-300/70"
            }`}>
            <img src={'/newLogo.svg'} alt='Logo' className='w-28 lg:w-32 cursor-pointer' />
            {/* this div will be hidden for mobile devices and for medium devices it will have flex */}
            <div className='hidden md:flex items-center gap-5 text-gray-600 '>
                <div className='flex items-center gap-5'>
                    {user &&
                        <><button>Become Educator</button>
                            | <Link to={"/my-enrollments"}>My Enrollments</Link>
                        </>
                    }
                </div>
                {user ? <UserButton /> :

                    <button onClick={() => openSignIn()} className='bg-blue-600 text-white py-2 px-5 rounded-full' >Create Account</button>}
            </div>
            {/* for medium and above screen -> hidden */}
            {/* for phone screens  */}
            <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-600'>
                <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
                    {user &&
                        <><button>Become Educator</button>
                            | <Link to={"/my-enrollments"}>My Enrollments</Link>
                        </>
                    }
                </div>
                {user ? <UserButton /> :
                    <button onClick={() => openSignIn()}><img src={assets.user_icon} alt='usericon' /></button>
                }

            </div>

        </div>
    )
}

export default Navbar