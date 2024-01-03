import { PRODUCTS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const productsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({
				url: PRODUCTS_URL,
			}),
			keepUnusedDataFor: 5,
			providesTags: ['Products'],
		}),
		getProductDetails: builder.query({
			query: (productId) => ({
				url: `${PRODUCTS_URL}/${productId}`,
			}),
			keepUnusedDataFor: 5,
			providesTags: ['Product'],
		}),
		createProduct: builder.mutation({
			query: () => ({
				url: PRODUCTS_URL,
				method: 'POST',
			}),
			invalidatesTags: ['Products'],
		}),
		updateProduct: builder.mutation({
			query: (data) => ({
				url: `${PRODUCTS_URL}/${data.productId}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['Product'],
		}),
	}),
})

export const {
	useGetProductsQuery,
	useGetProductDetailsQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
} = productsApiSlice
