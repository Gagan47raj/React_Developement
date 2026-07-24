
function StudentCard({id, name, dept, cgpa})
{
    return (
        <div>
            <h2>ID Card : {id}</h2>
            <h3>Name : {name}</h3>
            <h3>Department : {dept}</h3>
            <h3>CGPA : {cgpa}</h3>
        </div>
    )
}

export default StudentCard