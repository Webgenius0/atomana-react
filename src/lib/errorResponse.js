import { AxiosError } from "axios";

export default function errorResponse(err) {
  if (err instanceof AxiosError) {
    return (
      err.response?.data?.errors ||
      err.response?.data?.message ||
      "Something went wrong"
    );
  }
  if (err instanceof Error) return err.message || "Something went wrong";
  return "Something went wrong";
}
