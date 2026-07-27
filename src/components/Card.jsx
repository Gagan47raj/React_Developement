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
        <div className="shadow-xl rounded-xl p-5 bg-blue-100">  
            <h2 className="text-xl font-bold">Name : {name}</h2>
            <p className="font-bold">Roll No : {rollno}</p>
            <p className="font-bold">Department : {dept}</p>
            <p className="font-bold">CGPA : {cgpa}</p>
            <p className="font-bold">Email : {email}</p>
            <p className="font-bold">Skills : {skills.join(' , ')}</p>
            <button className="font-bold mx-auto mt-2 bg-blue-500 text-white rounded-lg p-1 hover:bg-blue-400">Get Details</button>
        </div>
    )
}

export default Card