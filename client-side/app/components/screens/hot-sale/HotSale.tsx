import { FC } from 'react'

import { formatToCurrency } from '@/utils/format-to-currency'

const HotSale: FC = () => {
	return (
		<div className='text-white px-8'>
			<div className='mt-14'>HOT SALE</div>
			<h1 className='text-3xl font-medium mt-5 mb-10 font-serif'>
				RED DRES WILL BRIGHTEN UP YOUR EVENING
			</h1>

			<div className='flex justify-between mb-10'>
				<div>
					<span className='font-normal text-xl mr-3'>
						{formatToCurrency(195)}
					</span>
					<span className='line-through opacity-50'>
						{formatToCurrency(295)}
					</span>
				</div>
				<button className='uppercase border-b border-white/20'>But Now</button>
			</div>
		</div>
	)
}

export default HotSale
