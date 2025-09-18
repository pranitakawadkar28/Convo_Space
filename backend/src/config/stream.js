import { StreamChat } from "stream-chat";
import { ENV } from '../config/env.js'

const streamClient = StreamChat.getInstance(
    ENV.STREAM_API_KEY, 
    ENV.STREAM_API_SECRET
)

export const upsertStreamUser = async (useData) => {
    try {
        await streamClient.upsertUser(userData)
        console.log("Stream user upserted successfully : ", userData.name);
        return useData
    }
    catch (error) {
        console.log("Error upserting Stream user : ", error);
    }
}

export const deleteStreamUser = async (useId) => {
    try {
        await streamClient.upsertUser(userId)
        console.log("Stream user deleted successfully : ", userId);
    }
    catch (error) {
        console.log("Error deleting Stream user : ", error);
    }
}

export const generateStreamToken = (userId) => {
    try {
        const userIdString = userId.toString();
        return streamClient.createToken(userIdString);
    } catch (error) {
        console.log("Error generating stream token : ", error);
        return null;
    }
}