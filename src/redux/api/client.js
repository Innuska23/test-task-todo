import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../../constants/client";

export const client = fetchBaseQuery({ baseUrl: BASE_URL });
