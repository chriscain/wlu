import axios from '@/lib/axios'

export const useOAuthTokens = () => {
    // Get all clients
    const getTokens = async () => {
        axios.get('/oauth/tokens').then(response => {
            console.log(response.data)
        })
    }

    const deleteToken = async tokenId => {
        axios.delete('/oauth/token/' + tokenId)
    }

    return {
        getTokens,
        deleteToken,
    }
}
