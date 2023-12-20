import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Quiz from "../interfaces/Quiz.interface";
import Announcement from "../interfaces/Announcement.interface";

const backendApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:4000/api/v1",
  }),
  tagTypes: ["quiz", "announcement"],
  endpoints: (builder) => ({
    // quizzes endpoints
    getAllQuizzes: builder.query<Quiz[], void>({
      query: () => "/quiz",
      transformResponse: (baseQueryReturnValue: { data: Quiz[] }) =>
        baseQueryReturnValue.data,
      providesTags: ["quiz"],
    }),
    createQuiz: builder.mutation({
      query: (quiz: Quiz) => ({
        url: "/quiz",
        method: "POST",
        body: quiz,
      }),
      invalidatesTags: ["quiz"],
    }),
    deleteQuiz: builder.mutation({
      query: (id: string) => ({ url: `/quiz/${id}`, method: "DELETE" }),
      invalidatesTags: ["quiz"],
    }),
    // announcements endpoints
    getAllAnnouncements: builder.query<Announcement[], void>({
      query: () => "/announcement",
      transformResponse: (baseQueryReturnValue: { data: Announcement[] }) =>
        baseQueryReturnValue.data,
      providesTags: ["announcement"],
    }),
    createAnnouncement: builder.mutation({
      query: (announcement: Announcement) => ({
        url: "/announcement",
        method: "POST",
        body: announcement,
      }),
      invalidatesTags: ["announcement"],
    }),
    deleteAnnouncement: builder.mutation({
      query: (id: string) => ({ url: `/announcement/${id}`, method: "DELETE" }),
      invalidatesTags: ["announcement"],
    }),
  }),
  refetchOnMountOrArgChange: 60,
});
export default backendApi;
export const {
  useGetAllQuizzesQuery,
  useCreateQuizMutation,
  useDeleteQuizMutation,
  useGetAllAnnouncementsQuery,
  useCreateAnnouncementMutation,
  useDeleteAnnouncementMutation,
} = backendApi;
