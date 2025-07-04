import {create} from "zustand";
import {axiosInstance} from "../lib/axios.js"
import toast from "react-hot-toast"

export const useQueryStore = create((set , get)=>({
  query:[],
  sendQuery:async(data)=>{
    try {
      const res = await axiosInstance.post("/query/saveQuery" , data);
      toast.success("Query send Successfully✅");
    } catch (error) {
   toast.error("Error in sending query"+error.response.message);
    }
  }
}));
