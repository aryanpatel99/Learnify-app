import { useState, createContext, useEffect } from 'react'
import { dummyCourses } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import humanizeDuration from 'humanize-duration'

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

    // function to calculate course chapter time
    const calculateChapterTime = (chapter)=>{
        let time = 0
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
        // convert into hrs and min
        return humanizeDuration(time*60*1000,{units:["h","m"]})
    }

    // function to calculate the total course duration 
    const calculateCourseDuration = (course)=>{
        let time = 0 
        course.courseContent.map((chapter)=>chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration))
        return humanizeDuration(time*60*1000,{units:["h","m"]})
    }

    // function to calculate the total no in the course
    const calculateNoOfLectures = (course)=>{
        let totalLectures = 0
        course.courseContent.forEach((chapter)=>{
            if( Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length
            }
        });
        return totalLectures
    }



    useEffect(() => {
        fetchAllCourses()
    }, [])

    const value = {
        currency,allCourses,navigate,calculateRating,isEducator,setIsEducator,calculateChapterTime,calculateCourseDuration,calculateNoOfLectures
        
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
    
}