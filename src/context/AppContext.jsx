import { useState, createContext, useEffect } from 'react'
import { dummyCourses } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)
    const navigate = useNavigate()

    // Fetch all courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }

    // function to calculate average rating
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0
        }
        let totalRaitng = 0
        course.courseRatings.map((rating => {
            totalRaitng += rating.rating
        }))
        return totalRaitng / course.courseRatings.length

    }

    useEffect(() => {
        fetchAllCourses()
    }, [])

    const value = {
        currency,allCourses,navigate,calculateRating,isEducator,setIsEducator
        
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
    
}