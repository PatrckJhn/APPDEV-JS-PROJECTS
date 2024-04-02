import React, {useState} from "react";
export default function Form(){
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    function handleIdChange (event)  {
        setId(event.target.value);
    }
    function handleNameChange (event)  {
        setName(event.target.value);
    }
    function handleCourseChange (event)  {
        setCourse(event.target.value);
    }
    function handleAgeChange (event)  {
        setAge(event.target.value);
    }
    function handleGenderChange (event)  {
        setGender(event.target.value);
    }
    function handleDateChange (event)  {
        setDate(event.target.value);
    }
    function addAttendance(){
        attendace.push({
            id: id,
            name: name,
            course: course,
            age: age,
            gender: gender,
            date: date
        })
        alert("Attendace Added!")
        setId(0);
        setCourse('');
        setName('');
        setAge(0);
        setGender('');
        setDate(0);
    }
    
    return(

        <>
            <h4>
                Student Attendance Information Form:
            </h4>
            <div className="form-container">
                ID Number: <input type ="text" value={id}
                onChange={handleIdChange} ></input><br />

                Name: <input type ="text" value={name}
                onChange={handleNameChange} ></input><br />

                Course: <input type ="text" value={course}
                onChange={handleCourseChange} ></input><br />

                Age: <input type ="text" value={age}
                onChange={handleAgeChange} /><br /> 
                <label> Male</label><input
                type = "radio" value = "Male" 
                checked ={gender === "Male"}
                onChange =
                {handleGenderChange}/>

                <label> Female</label><input
                type = "radio" value = "Female" 
                checked ={gender === "Female"}
                onChange =
                {handleGenderChange}/>
                <br></br>

                Date: <input type ="date" value={date}
                onChange={handleDateChange} ></input><br />

        <div className="card-container">
                    <h2>Student to be added:</h2>
                    <p>Student ID: <strong>{id}</strong></p>
                    <p>STUDENT NAME: <strong>{name}</strong></p>
                    <p>STUDENT COURSE: <strong>{course}</strong></p>
                    <p>STUDENT AGE: <strong>{age}</strong></p>
                    <p>STUDENT GENDER: <strong>{gender}</strong></p>
                    <p>STUDENT DATE: <strong>{date}</strong></p>
                </div>

                <button className="addAttendance" onClick={addAttendance}>Submit</button>

            </div>
           
        </>
    )
}