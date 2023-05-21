import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: {
		key: '651e25575a924e6ab141ca8cf6b0403f',
	},
});
