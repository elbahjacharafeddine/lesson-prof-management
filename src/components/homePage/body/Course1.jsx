import React, { useState, useEffect } from "react";
import Course from "../../usedComponents/Course";
import axios from "axios";
function Course1(props) {
  let [courses, setcourses] = useState({ data: [] });
  let [profs, setProfs] = useState([]);
  let [loading, setLoading] = useState(true);

  //axios
  const getCourses = async () => {
    try {
      await axios
        .all([
          axios.get(`http://localhost:5000/allProfs`),
          axios.get(`http://localhost:5000/bestCourses`),
        ])
        .then(
          axios.spread((data1, data2) => {
            //hadchi 3rfto mkhrb9
            console.log("profs : ");
            console.log(data2.data);
            console.log("courses : ");
            setProfs(data1.data);
            console.log(data1.data);
            // setcourses((arr) => (arr = data2.data));
            let temp = data2.data;

            console.log("hello ");
            // console.log(courses);
            for (let j = 0; j < temp.length; j++) {
              for (let k = 0; k < profs.length; k++) {
                if (profs[k]._id === temp[j].instructor) {
                  temp[j].prof = profs[k].firstName + " " + profs[k].lastName;
                  console.log(temp[i].prof);
                }
              }
            }

            console.log("courses :  : ");
            console.log(temp);
            //courses.data = temp;
            setcourses({ data: temp });
            courses.data = temp;

            console.log(courses);
            if (loading === true) setLoading(false);
          })
        );
    } catch (err) {
      console.log(err);
    }
  };
  //
  let i = 0;
  useEffect(() => {
    if (loading) getCourses();
  }, [loading]);

  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        <Course
          link="id"
          img={"http://localhost:5000/addPic/" + courses.data[0].image}
          alt="course1"
          title={courses.data[0].title}
          author={courses.data[0].prof}
          rating={courses.data[0].rating}
          id={courses.data[0]._id} //khask tjibo mn back end :)
        />
      )}
    </div>
  );
}
export default Course1;
