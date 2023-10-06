import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "../../../hook/baseQueryWithReauth";
import {
    ICreateSalary,
    ISalaryIncreate,
    ISalaryIncreateRes,
} from "../../../interface/SalaryIncreate.interface";

export const SalaryIncreateApi = createApi({
    reducerPath: "SalaryIncreateApi",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["SalaryIncreateApi"],
    endpoints: (builder) => ({
        // get by employee id
        getSalarybyEmployeeId: builder.query<ISalaryIncreateRes, string | number>({
            query: (employeeId) => `salary-increase?employeeId=${employeeId}`,
            providesTags(result) {
                if (result) {
                    const final = [
                        ...result.data.map(({ id }) => ({
                            type: "SalaryIncreateApi" as const,
                            id,
                        })),
                        { type: "SalaryIncreateApi" as const, id: "SalaryIncreateApiLIST" },
                    ];
                    return final;
                }
                return [{ type: "SalaryIncreateApi", id: "SalaryIncreateApiLIST" }];
            },
        }),

        getSalaryByLeader: builder.query<ISalaryIncreateRes, void>({
            query: () => "/salary-increase/current-leader",
            providesTags(result) {
                if (result) {
                    const final = [
                        ...result.data.map(({ id }) => ({
                            type: "SalaryIncreateApi" as const,
                            id,
                        })),
                        { type: "SalaryIncreateApi" as const, id: "SalaryIncreateApiLIST" },
                    ];
                    return final;
                }
                return [{ type: "SalaryIncreateApi", id: "SalaryIncreateApiLIST" }];
            },

        }),
        getSalaryById: builder.query<ISalaryIncreate, string | number>({
            query: (id) => "salary-increase/" + id,
        }),
        createSalary: builder.mutation({
            query: ({
                data,
                employeId,
            }: {
                employeId: string | number;
                data: ICreateSalary[];
            }) => ({
                url: `/salary-increase?employeeId=${employeId}`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: () => [
                { type: "SalaryIncreateApi", id: "SalaryIncreateApiLIST" },
            ],
        }),
        updateSalary: builder.mutation<
            { code: number; message: string; data: ISalaryIncreate },
            ISalaryIncreate
        >({
            query(data) {
                return {
                    url: `/salary-increase/${data.id}`,
                    method: "PUT",
                    body: data,
                };
            },
            invalidatesTags: () => [
                { type: "SalaryIncreateApi", id: "SalaryIncreateApiLIST" },
            ],
        }),
        deleteSalary: builder.mutation<
            { code: number; message: string; data: ISalaryIncreate },
            string | number
        >({
            query(data) {
                return {
                    url: `/salary-increase/${data}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: () => [
                { type: "SalaryIncreateApi", id: "SalaryIncreateApiLIST" },
            ],
        }),
    }),
});

export const {
    useGetSalarybyEmployeeIdQuery,
    useCreateSalaryMutation,
    useUpdateSalaryMutation,
    useDeleteSalaryMutation,
    useGetSalaryByIdQuery,
    useGetSalaryByLeaderQuery,
} = SalaryIncreateApi;
