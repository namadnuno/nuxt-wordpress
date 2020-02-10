import axios from 'axios';

export default axios.create({
    baseURL: 'http://wordpress/wp-json/wp/v2/'   
});