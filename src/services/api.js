
import axios from 'axios'

const api_url = 'http://localhost:5000/'

class API {

    async get(url) {
        try {
            const response = await axios.get(api_url + url);
            return {ok:1, response }
        } catch (error) {
            return { ok:0, error }
        }        
    }

    async authInfo() {
        var answer = await this.get('user/info')
        console.log(answer)
    }
}

var api = new API

export default api