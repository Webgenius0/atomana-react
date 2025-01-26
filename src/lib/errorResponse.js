import { AxiosError } from "axios";

export default function errorResponse(err, callbackError) {
  if (err instanceof AxiosError) {
    if (err.response) {
      const status = err.response.status;
      const data = err.response.data;

      switch (status) {
        case 401:
          return "Unauthorized. Please login again";
        case 422:
          if (callbackError && data?.error) {
            callbackError?.(data.error);
          }
          return null;
        default:
          return data?.message || "Something went wrong";
      }
    } else if (err.request) {
      return "Internet connection error";
    }
  } else if (err instanceof Error) {
    return err.message || "Something went wrong";
  }
  return "Something went wrong";
}
