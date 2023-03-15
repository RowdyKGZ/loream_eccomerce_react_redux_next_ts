import { FC } from 'react'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

const HomeInformation: FC = () => {
	return (
		<Row
			isBorder={false}
			className={'border-t-2 border-b-2  border-black mt-10'}
		>
			<Column size={3} className='flex-col py-14'>
				<div className='font-medium text-2xl text-white'>100K</div>
				<div className='text-white/20'>Customers</div>
			</Column>
			<Column size={9} className='flex-col border-black'>
				<div className='ml-7'>
					<div className='font-medium text-sm text-white'>New Collection</div>
					<div className='text-white/20'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
						odio unde iure asperiores nemo id veritatis soluta commodi modi.
						Obcaecati?
					</div>
				</div>
			</Column>
		</Row>
	)
}

export default HomeInformation
