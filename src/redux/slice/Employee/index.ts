import { createApi } from "@reduxjs/toolkit/query/react";
import {
  IEmployeeApiResByID,
  IEployeeRes,
  IUser,
} from "../../../interface/Employee.interface";
import { baseQueryWithReauth } from "../../../hook/baseQueryWithReauth";

export const EmployeeAPI = createApi({
  reducerPath: "EmployeeApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["EmployeeApi"],
  endpoints: (builder) => ({
    getCreateUser: builder.query<
      IEployeeRes,
      { pageIndex: number; pageSize: number; listStatus: string; keyword: string }
    >({
      query: (args) => {
        const { pageIndex, pageSize, listStatus, keyword } = args;
        return {
          url: `/employee/search?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}&listStatus=${listStatus}`,
        };
      },
      providesTags(result) {
        if (result) {
          const final = [
            ...result?.data?.map(({ id }) => ({
              type: "EmployeeApi" as const,
              id,
            })),
            { type: "EmployeeApi" as const, id: "List" },
          ];
          return final;
        }

        return [{ type: "EmployeeApi", id: "List" }];
      },
    }),
    getEmployeeById: builder.query<IEmployeeApiResByID, string | number>({
      query: (EmployeeById) => `/employee/${EmployeeById}`,
    }),

    createEmployee: builder.mutation<IUser, Omit<IUser, "id">>({
      query(data) {
        return {
          url: `employee`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: () => [{ type: "EmployeeApi" as const, id: "List" }],
    }),
    updateEmployee: builder.mutation<any, any>({
      query(data) {
        return {
          url: `employee/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: () => [{ type: "EmployeeApi", id: "List" }],
    }),

    deleteEmployeeApi: builder.mutation({
      query: (id) => ({
        url: `/employee/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: () => [{ type: "EmployeeApi", id: "List" }],
    }),
    uploadImage: builder.mutation({
      query(data) {
        // truyen len day 1 data input file image
        // const data = new FormData()
        //   data.append('file', img)

        return {
          url: `/employee/upload-image`,
          method: "POST",
          data,
        };
      },
    }),
    getAvata: builder.query({
      query: (img) => `/employee/upload-image/${img}`,
    }),
    getEmployeHappening: builder.query({
      query: (listStatus) => `employee/happening?listStatus=${listStatus}`,
    }),
  }),
});

export const {
  useGetEmployeeByIdQuery,
  useCreateEmployeeMutation,
  useGetAvataQuery,
  useDeleteEmployeeApiMutation,
  useGetCreateUserQuery,
  useUpdateEmployeeMutation,
  useUploadImageMutation,

  useGetEmployeHappeningQuery,
} = EmployeeAPI;