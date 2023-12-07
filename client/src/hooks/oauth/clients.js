import axios from '@/lib/axios';

export const useOAuthClients = () => {
    // Get all clients
    const getClients = async () => {
        axios.get('/oauth/clients').then((response) => {
            return response.data;
        });
    };

    // Create a client, e.g.
    //
    // name: 'Client Name',
    // redirect: 'http://example.com/callback'
    const createClient = async ({name, redirect}) => {
        axios
            .post('/oauth/clients', {
                name: name,
                redirect: redirect,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((response) => {
                // List errors on response...
            });
    };

    const updateClient = async (clientId, data) => {
        axios
            .put('/oauth/clients/' + clientId, data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((response) => {
                // List errors on response...
            });
    };

    const deleteClient = async (clientId) => {
        axios.delete('/oauth/clients/' + clientId);
    };

    return {
        getClients,
        createClient,
        updateClient,
        deleteClient,
    };
};
