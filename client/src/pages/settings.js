import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'

const Settings = () => {

    const handleAuth = () => {
        axios
            .get('/yahoo/auth')
            .then(res => {
                window.location.href = res.data;
            })
            .catch(res => {
                console.log(res);
            });
    }

    const getTeams = () => {
        axios
            .get('/api/yahoo/teams')
            .then(res => {
                console.log(res);
            })
            .catch(res => {
                console.log(res);
            });
    }

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
                            Connect to Yahoo
                        </div>
                        <button className="px-6 py-12 bg-blue-400" onClick={handleAuth}>Auth with yahoo!</button>

                        <button className="px-6 py-12 bg-blue-800" onClick={getTeams}>Get teams!</button>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Settings
