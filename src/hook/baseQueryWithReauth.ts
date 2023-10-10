import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query";
import { RootState } from "../redux/store";
import { toast } from "react-toastify";
import moment from "moment";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://em-v2.oceantech.com.vn/em/",
  // credentials: "include",
  prepareHeaders: (headers) => {
    // const accessToken = (getState() as RootState).auth.user?.access_token;

    const user = localStorage.getItem("user");
    const accetoken_user = user ? JSON.parse(user) : null;

    if (accetoken_user.access_token) {
      headers.set("Authorization", `Bearer ${accetoken_user.access_token}`);
      headers.set("Content-Type", "application/json");
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.meta?.response?.status === 401) {
    toast.error("Phiên đăng nhập đã hết hạn , vui lòng đăng nhập")
    localStorage.removeItem("user")
  }
  if (result.meta?.response?.status === 403) {
    const refreshToken = await baseQuery(
      "/api/refreshToken",
      api,
      extraOptions
    ); // Request refreshToken
    if (refreshToken.data) {
      // store the new token
      api.getState() as RootState; // Cấp lại AccessToken
    }
  }
  return result;
};
