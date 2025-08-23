import * as React from 'react'; 

const AdminLogin = () =>{
    return (
        <div>
            <h2>Admin Login</h2>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit" onClick={() => {}}>Login</button>
            </form>
        </div>
    )
}

export default AdminLogin;

