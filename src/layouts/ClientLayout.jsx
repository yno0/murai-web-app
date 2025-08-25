import React from "react";
import { Outlet, Routes, Route } from 'react-router-dom';
import { ClientSidebar } from '../components/client/sidebar';
import Home from '../pages/client/Home';
import Detection from '../pages/client/Detection';
import Extension from '../pages/client/Extension';
import SupervisionStatus from '../pages/client/SupervisionStatus';
import Help from '../pages/client/Help';
import Groups from '../pages/client/Group';
import GroupDetails from '../pages/client/GroupDetails';
import Reports from '../pages/client/Report';

export default function ClientLayout() {
    return (
        <div className="flex h-screen">
           <ClientSidebar key="client-sidebar" />
            <main className="flex-1 p-6 overflow-auto">
                <Routes>
                  <Route path="dashboard" element={<Home />} />
                  <Route path="detections" element={<Detection />} />
                  <Route path="extension" element={<Extension />} />
                  <Route path="group" element={<Groups />} />
                  <Route path="supervision" element={<SupervisionStatus />} />
                  <Route path="help" element={<Help />} />
                  <Route path = "group-details/:id" element={<GroupDetails />} />
                  <Route path = "reports" element={<Reports />} />
                </Routes>
                <Outlet />
            </main>
        </div>
    );
}