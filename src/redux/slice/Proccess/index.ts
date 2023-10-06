import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "../../../hook/baseQueryWithReauth";
import { IProccessRes, IProccess } from "../../../interface/Proccess.interface";

export const ProcessAPI = createApi({
  reducerPath: "ProcessAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["ProcessAPI"],
  endpoints: (builder) => ({
    // get proccess by id
    getProccessById: builder.query({
      query: (id) => `/process/${id}`,
    }),
    // get by employeeid
    getProcessByEmp: builder.query<IProccessRes, string | number>({
      query: (id) => `/process?employeeId=${id}`,
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map(({ id }) => ({
              type: "ProcessAPI" as const,
              id,
            })),
            { type: "ProcessAPI" as const, id: "ProcessAPILIST" },
          ];
          return final;
        }
        return [{ type: "ProcessAPI", id: "ProcessAPILIST" }];
      },
    }),
    // get by current leader proceee

    getProccessLeaderCurrent: builder.query({
      query: () => `/process/current-leader`,
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map(({ id }) => ({
              type: "ProcessAPI" as const,
              id,
            })),
            { type: "ProcessAPI" as const, id: "ProcessAPILIST" },
          ];
          return final;
        }
        return [{ type: "ProcessAPI", id: "ProcessAPILIST" }];
      },
    }),

    addProcessByEmp: builder.mutation<
      IProccessRes,
      {
        id: string | number;
        data: Pick<
          IProccess,
          "promotionDay" | "newPosition"
        >[];
      }
    >({
      query: ({ id, data }) => ({
        url: `/process?employeeId=${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: () => [{ type: "ProcessAPI", id: "ProcessAPILIST" }],
    }),

    updateProcess: builder.mutation<IProccessRes, any>({
      query(data) {
        return {
          url: `/process/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: () => [{ type: "ProcessAPI", id: "ProcessAPILIST" }],
    }),
    deleteProcess: builder.mutation({
      query(id) {
        return {
          url: `/process/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: () => [{ type: "ProcessAPI", id: "ProcessAPILIST" }],
    }),
  }),
});

export const {
  useAddProcessByEmpMutation,
  useDeleteProcessMutation,
  useGetProccessLeaderCurrentQuery,
  useGetProcessByEmpQuery,
  useUpdateProcessMutation,
  useGetProccessByIdQuery,
} = ProcessAPI;
