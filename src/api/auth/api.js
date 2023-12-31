import axios from "axios";

const path = process.env.VUE_APP_BASE_PATH

export default {
  async registration({ username, email, password, confirmPassword, fcmToken, deviceName, location }) {
    return (await axios.post(`${path}/auth/register`, {
      username,
      email,
      password,
      password_confirmation: confirmPassword,
      fcm_token: fcmToken,
      device_name: deviceName,
      location,
    })).data
  },

  async login({ email, password, fcmToken, deviceName }) {
    return (await axios.post(`${path}/auth/login`, {
      email,
      password,
      fcm_token: fcmToken,
      device_name: deviceName,
    })).data
  }
}