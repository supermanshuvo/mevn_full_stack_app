import axios from "axios";
const url = "/api/post";
export default class API{
    // get all data
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }
    // get single data
    static async getPostById(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    // add post
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }
    // Update data
    static async updatePost(id,post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}