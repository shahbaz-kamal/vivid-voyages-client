import { baseApi } from "@/redux/baseApi";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDivision: builder.mutation({
      query: (newDivision) => ({
        url: "/division/create",
        method: "POST",
        data: newDivision,
      }),
      invalidatesTags:["Division"]
    }),
    // removeTourType: builder.mutation({
    //   query: (tourTypeId) => ({
    //     url: `/tour/tour-types/${tourTypeId}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags:["Tour"]
    // }),

    getDivisions: builder.query({
      query: () => ({
        url: "/division",
        method: "GET",
      }),
      providesTags:["Division"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useAddDivisionMutation,useGetDivisionsQuery } = divisionApi;
