import React from "react";
import { Outlet, Routes, Route } from 'react-router-dom';
import { ClientSidebar } from '../components/client/sidebar';
import Home from '../pages/client/Home';
import Detection from '../pages/client/Detection';
import Extension from '../pages/client/Extension';
import SupervisionStatus from '../pages/client/SupervisionStatus';
import Help from '../pages/client/Help';

export default function ClientLayout() {
    return (
        <div className="flex">
           <ClientSidebar/>
            <main className="flex-1 p-6 ">
                <Routes>
                  <Route path="dashboard" element={<Home />} />
                  <Route path="detections" element={<Detection />} />
                  <Route path="extension" element={<Extension />} />
                  <Route path="supervision" element={<SupervisionStatus />} />
                  <Route path="help" element={<Help />} />
                </Routes>
                <Outlet />
            </main>
        </div>
    );
}