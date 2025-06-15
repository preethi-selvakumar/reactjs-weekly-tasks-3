let leads = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        status: 'Interested',
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '987-654-3210',
        status: 'Not Interested',
    },
];


const delay = (res, ms = 400) => new Promise(resolve => setTimeout(() => resolve(res), ms));

export const api = {
    getLeads: () => delay([...leads]),

    getLead: (id) => delay(leads.find((l) => l.id === id)),

    updateLead: (id, data) => {
        leads = leads.map((l) =>
            l.id === id ? { ...l, ...data } : l
        );
        return delay({ success: true });
    },

    addLead: (newLead) => {
        const id = Date.now().toString();
        const leadWithDefaults = {
            id,
            name: newLead.name || '',
            email: newLead.email || '',
            phone: newLead.phone || '',
            status: newLead.status || 'New',
        };
        leads.push(leadWithDefaults);
        return delay({ ...leadWithDefaults });
    },

    deleteLead: (id) => {
        leads = leads.filter((l) => l.id !== id);
        return delay({ success: true });
    },
};
