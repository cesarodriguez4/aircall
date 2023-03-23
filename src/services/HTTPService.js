import axios from 'axios';

export const HTTPService = axios.create({
    baseURL: 'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
