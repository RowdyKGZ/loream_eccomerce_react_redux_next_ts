import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import Loader from '@/ui/loader/Loader'

import HotSale from '../hot-sale/HotSale'

import HomeInformation from './home-information/HomeInformation'
import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row
				className='bg-primary'
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/background.png)'
				}}
			>
				<Column size={7} isPadding={false}>
					<Image
						src='/images/main-4x.png'
						alt=''
						width={'665'}
						height={'550'}
					/>
				</Column>
				<Column
					size={5}
					isPadding={false}
					isCenter={false}
					className='flex-col justify-center'
				>
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>
		</Layout>
	)
}

export default Home
