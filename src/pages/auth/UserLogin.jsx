import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Left side - Image */}
            <div className="hidden lg:flex lg:w-1/2 bg-black items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-90" />
                <div className="relative z-10 p-12 text-white max-w-lg">
                    <h2 className="text-4xl font-bold mb-6">Welcome Back</h2>
                    <p className="text-lg text-gray-300">
                        Sign in to access your dashboard and continue monitoring your family's online safety.
                    </p>
                </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <img src="/src/assets/Logo.svg" alt="Murai Logo" className="h-10 mb-12" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                        <p className="text-gray-600">Enter your credentials to access your account</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 focus:bg-white transition-colors"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <Link to="/forgot-password" className="text-xs text-gray-600 hover:text-black">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 focus:bg-white transition-colors"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button
                                type="button"
                                className="w-full flex items-center justify-center px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 text-sm"
                                onClick={() => {
                                    // Handle Google sign in
                                    console.log('Google sign in clicked');
                                }}
                            >
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-black hover:underline font-medium">
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}