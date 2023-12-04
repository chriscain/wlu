import { useEffect, useState } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import { useOAuthClients } from '@/hooks/oauth/clients';
import Head from 'next/head'

const Settings = () => {
    const {getClients, createClient, updateClient, deleteClient} = useOAuthClients();
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const clients = getClients().then(response => {
            console.log('response', response);

            setClients(response.clients);  
        });
    }, [])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Settings
                </h2>
            }>
            <Head>
                <title>Settings</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Connections
                        </div>
                        {clients.map(client => (
                            <div className="p-6 bg-white border-b border-gray-200">
                                {client.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Settings
