
import axios from 'axios'

const api_url = 'http://localhost:3001/api/'

class API {

    async get(url) {
        try {
            const response = await axios.get(api_url + url);
            return {ok:1, response, data: response.data }
        } catch (error) {
            return {ok:0, error }
        }        
	}
	
    async post(url, data) {
        try {
            const response = await axios.post(api_url + url, data);
            return {ok:1, response, data: response.data }
        } catch (error) {
            return {ok:0, error }
        }        
	}

    async authInfo() {
        var answer = await this.get('user/info')
		return answer
	}
	
	async register(login, email, password) {
		var answer = await this.post('user/register', { email, login, password })
		return answer
	}
}

var api = new API()

export default api