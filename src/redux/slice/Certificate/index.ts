import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "../../../hook/baseQueryWithReauth";
import { IProposalRes } from "../../../interface/Proposal.interface";
import {
  ICertificate,
  ICertificateRes,
  Irespone
} from "../../../interface/Certificate.interface";

export const CertificateAPI = createApi({
  reducerPath: "CertificateAPI",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["CertificateAPI"],
  endpoints: (builder) => ({
    //  get by employee

    getCertificateByEmployeeId: builder.query<ICertificateRes, string | number>({
      query: (employeeId) => `certificate?employeeId=${employeeId}`,
      providesTags(result) {
        if (result) {
          const final = [
            ...result.data.map(({ id }) => ({
              type: "CertificateAPI" as const,
              id,
            })),
            { type: "CertificateAPI" as const, id: "List" },
          ];
          return final;
        }

        return [{ type: "CertificateAPI", id: "List" }];
      },
    }),
    // get-by-id
    getCertificateById: builder.query<IProposalRes, string | number>({
      query: (id) => `/certificate/${id}`,
    }),

    createCertificate: builder.mutation({
      query: ({
        data,
        employeeId,
      }: {
        data: Pick<
          ICertificate,
          "certificateName" | "issueDate" | "content" | "field"
        >[];
        employeeId: string | number;
      }) => ({
        url: `/certificate?employeeId=${employeeId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: () => [{ type: "CertificateAPI" as const, id: "List" }],
    }),
    updateCertificate: builder.mutation<
      Irespone,
      Pick<
        ICertificate,
        "certificateName" | "issueDate" | "content" | "field" | "id"
      >
    >({
      query(data) {
        return {
          url: `/certificate/${data.id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: () => [
        { type: "CertificateAPI", id: "List" },
      ],
    }),
    deleteCertificate: builder.mutation({
      query: (id) => ({
        url: `/certificate/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: () => [
        { type: "CertificateAPI", id: "List" },
      ],
    }),
  }),
});

export const {
  useCreateCertificateMutation,
  useDeleteCertificateMutation,
  useGetCertificateByEmployeeIdQuery,
  useGetCertificateByIdQuery,
  useUpdateCertificateMutation,
} = CertificateAPI;
