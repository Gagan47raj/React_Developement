
function Login(){
    
    const isLogin = true

    if(isLogin){
        return <h1>Welcome, You are Signin</h1>
    }
    else
    {
        return <h1>Login First</h1>
    }

    return isLogin 
    ?  <h1>Welcome, You are signin</h1>
    :  <h1>Login First</h1>
}
export default Login