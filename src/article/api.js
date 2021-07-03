import axios from "axios";
import {getHeader} from '@axios/header'

let baseURL = process.env.baseURL;

const $_axios = axios.create({timeout: 10000,baseURL:baseURL})
$_axios.interceptors = function(){

}