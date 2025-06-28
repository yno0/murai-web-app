import React from "react";
import { Outlet } from 'react-router-dom';
import { ClientSidebar } from '../components/client/sidebar'; // Adjust the path as necessary


export default function ClientLayout() {
    return (
        <div className="flex">
           <ClientSidebar/>
            <main className="flex-1 p-6 bg-gray-100">
                <Outlet />
            </main>
        </div>
    );
}