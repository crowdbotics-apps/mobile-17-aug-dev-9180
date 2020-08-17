import axios from "axios"
import {
  NEW_PLUGIN_17_AUG_USERNAME,
  NEW_PLUGIN_17_AUG_PASSWORD
} from "react-native-dotenv"
const newPlugin17aug = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/9180/storyboard/10016/",
  auth: {
    username: NEW_PLUGIN_17_AUG_USERNAME,
    password: NEW_PLUGIN_17_AUG_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
