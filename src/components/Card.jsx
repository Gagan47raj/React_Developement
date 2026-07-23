// Student : h1 name p rollno  p department  p cgpa p email

// function Card(props){
//     return (
//         <>  
//             <h2>Name : {props.name}</h2>
//             <p>Roll No : {props.rollno}</p>
//             <p>Department : {props.dept}</p>
//             <p>CGPA : {props.cgpa}</p>
//             <p>Email : {props.email}</p>
//         </>
//     )
// }

// without props word
function Card({name, rollno, dept, cgpa, email, skills=[]}){
    return (
        <>  
            <h2>Name : {name}</h2>
            <p>Roll No : {rollno}</p>
            <p>Department : {dept}</p>
            <p>CGPA : {cgpa}</p>
            <p>Email : {email}</p>
            <p>Skills : {skills.join(' , ')}</p>
            <button>Increment CGPA</button>
        </>
    )
}

export default Card