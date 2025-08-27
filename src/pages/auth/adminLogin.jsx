import * as React from 'react'; 

const AdminLogin = () =>{
    return (
        <div
            className='relative min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100'
        >
           <div className='w-full max-w-md bg-white/90 rounded-xl p-8 md:p-10 shadow-lg backdrop-blur-sm border border-gray-100'>
            <h2 className='text-2xl font-medium text-center mb-2'>Admin Login</h2>
            <p className='text-sm text-gray-500 mb-8 text-center'>Hello, enter your details to login into the admin panel</p>

            <div className='flex flex-col items-stretch justify-center space-y-5'>
                <input type='text' placeholder='Username' className='w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
                <input type='password' placeholder='Password' className='w-full p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' />
                <button className='w-full text-right text-sm text-indigo-600 hover:underline cursor-pointer'>Forget Password?</button>
                <button className='w-full h-10 py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Login</button>
            </div>
           </div>
        </div>
    )
}

export default AdminLogin;

