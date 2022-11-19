import SearchBar from "../../components/Courses/SearchBar";
import FinalCourseItem from "../../components/Courses/MainCourseItems/FinalCourseItem";

const SingleTopicCourses = (props) => {
    return <div style={{display: 'flex', margin: "0", flexDirection: "column"}}>
        <SearchBar/>
        <div style={{
            display: "flex", flexDirection: "row", flexWrap: "wrap",
            justifyContent: "center"
        }}>
            <FinalCourseItem/>
            <FinalCourseItem/>
            <FinalCourseItem/>
            <FinalCourseItem/>
            <FinalCourseItem/>
            <FinalCourseItem/>
            <FinalCourseItem/>
            <FinalCourseItem/>
            <FinalCourseItem/>
        </div>
    </div>
};

export default SingleTopicCourses;