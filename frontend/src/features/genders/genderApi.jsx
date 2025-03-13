import { axiosi } from "../../config/axios";

export const fetchAllgenders=async()=>{
    try {
        const res=await axiosi.get("/genders")
        return res.data
    } catch (error) {
        throw error.response.data
    }
}