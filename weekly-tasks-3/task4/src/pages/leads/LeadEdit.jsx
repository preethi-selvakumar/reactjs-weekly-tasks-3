import React from 'react';
import { useParams } from 'react-router-dom';
import LeadEditForm from '../../components/LeadEditForm';
import withPermissions from '../../hocs/withPermissions';

const LeadEdit = () => {
    const { id } = useParams();
    return <LeadEditForm leadId={id} />;
};

export default withPermissions(LeadEdit, 'canEditLead');
