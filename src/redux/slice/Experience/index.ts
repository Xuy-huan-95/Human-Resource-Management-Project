import { createApi } from "@reduxjs/toolkit/query/react";
import {
  IExperience,
  IExperienceRes,
} from "../../../interface/Experiece.interface";
import { baseQueryWithReauth } from "../../../hook/baseQueryWithReauth";

export const ExperieceAPi = createApi({
  reducerPath: "ExperieceAPi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["ExperieceAPi"],
  endpoints: (builder) => ({
    // get by employee id
    getExperieceByemployeeId: builder.query<any, number>({
      query: (id) => `/experience?employeeId=${id}`,
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map(({ id }) => ({
              type: "ExperieceAPi" as const, id,
            })),
            { type: "ExperieceAPi" as const, id: "List" },
          ];
          return final;
        }

        return [{ type: "ExperieceAPi", id: "List" }];
      },
    }),
    getExperieceById: builder.query<IExperienceRes, string | number>({
      query: (id) => "/experience" + id,
    }),
    createExperiece: builder.mutation<
      IExperienceRes,
      { data: Omit<IExperience, "id">[]; employeeId: string | number }
    >({
      query: ({ data, employeeId }) => ({
        url: `/experience?employeeId=${employeeId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: () => [{ type: "ExperieceAPi" as const, id: "List" }],
    }),
    updateExperiece: builder.mutation<IExperienceRes, IExperience>({
      query(data) {
        return {
          url: `/experience/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: () => [{ type: "ExperieceAPi" as const, id: "List" }],
    }),
    deleteExperiece: builder.mutation({
      query: (id) => ({
        url: `/experience/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: () => [{ type: "ExperieceAPi" as const, id: "List" }],
    }),
  }),
});

export const {
  useCreateExperieceMutation,
  useGetExperieceByIdQuery,
  useGetExperieceByemployeeIdQuery,
  useUpdateExperieceMutation,
  useDeleteExperieceMutation,

} = ExperieceAPi;
