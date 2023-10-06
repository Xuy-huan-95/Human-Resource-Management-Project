import { createApi } from "@reduxjs/toolkit/query/react";
import { ILeader, ILeaderRes } from "../../../interface/Leader.interface";
import { baseQueryWithReauth } from "../../../hook/baseQueryWithReauth";

export const LeaderApi = createApi({
  reducerPath: "LeaderAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["LeaderAPI"],
  endpoints: (builder) => ({
    getAllLeaders: builder.query({
      query: () => "/leader",
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map(({ id }) => ({
              type: "LeaderAPI" as const,
              id,
            })),
            { type: "LeaderAPI" as const, id: "LeaderAPILIST" },
          ];
          return final;
        }
        return [{ type: "LeaderAPI", id: "LeaderAPILIST" }];
      },
    }),

    getLeader: builder.query<
      { code: number; message: string; data: ILeader },
      string | number
    >({
      query: (id) => "/leader",
    }),
    createLeader: builder.mutation({
      query: (data) => ({
        url: `/leader`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: () => [{ type: "LeaderAPI", id: "LeaderAPILIST" }],
    }),
    updateLeader: builder.mutation<
      { code: number; message: string; data: ILeader },
      {
        id: string;
        data: {
          leaderName: string;
          leaderPosition: number;
        };
      }
    >({
      query({ id, data }) {
        return {
          url: `/leader/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: () => [{ type: "LeaderAPI", id: "LeaderAPILIST" }],
    }),
  }),
});

export const {
  useCreateLeaderMutation,
  useUpdateLeaderMutation,
  useGetAllLeadersQuery,
  useGetLeaderQuery,
} = LeaderApi;
