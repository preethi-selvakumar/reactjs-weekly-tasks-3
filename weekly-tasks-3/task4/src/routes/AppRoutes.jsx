import { Routes, Route, Navigate } from 'react-router-dom';
import LeadsList from '../pages/leads/LeadsList';
import LeadEdit from '../pages/leads/LeadEdit';
import LeadDetailSidebar from '../pages/leads/LeadDetailSidebar';
import Settings from '../pages/Settings';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/leads" />} />

            <Route path="/leads" element={<LeadsList />}>
                <Route path=":id" element={<LeadDetailSidebar />} />
            </Route>

            <Route path="/leads/:id/edit" element={<LeadEdit />} />

            <Route path="/settings" element={<Settings />} /> 
        </Routes>
    );
};

export default AppRoutes;
