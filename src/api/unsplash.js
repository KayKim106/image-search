import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:'Client-ID 1cb03e766e91ccb13de1e9464b82abf57462ee64fa5afece9560a1b33e0580cd'
    }
})
