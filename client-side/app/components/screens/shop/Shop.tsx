import { log } from 'console'
import { GetStaticProps } from 'next'
import { FC, useEffect, useState } from 'react'

import { IProductsPage } from '@/../pages'

function api<T>(): Promise<T> {
	const [dataProducts, setData] = useState('')
	return fetch('https://fakestoreapi.com/products')
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}

			return response.json()
		})
		.then(data => {
			setData(data)

			return data
		})
		.catch((error: Error) => {
			throw error /* <-- rethrow the error so consumer can still catch it */
		})
}

const Shop: FC = () => {
	return <div>Shop</div>
}

export default Shop
