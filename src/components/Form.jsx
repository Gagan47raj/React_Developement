
function Form()
{
    return (
        <div className="flex justify-center h-screen bg-blue-100">
            <form className="bg-white shadow-lg rounded-2xl p-5 w-100 mt-24 h-90">
            <h1 className="text-4xl font-bold text-blue-600 my-4 text-center">Login</h1>
            
            <p className="text-xl font-bold">Email : </p>
            <input className="border w-full p-2 mb-3 rounded-xl" placeholder="Enter Email"/>

            <p className="text-xl font-bold">Password : </p>
            <input className="border w-full p-2 mb-3 rounded-xl" placeholder="Enter Password"/>
            
            <button className="bg-blue-500 text-2xl font-bold rounded-xl p-3 text-white ml-30 hover:bg-blue-300 shadow-lg">Login</button>
            </form>
        </div>

        // create a component Table 
        //  inside it create table and apply tailwind css
        // column id, name, dept, cgpa, age
    )
}

export default Form 