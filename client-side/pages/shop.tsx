import { NextPage } from 'next'
import { Props } from 'next/script'

import Shop from '@/screens/shop/Shop'

const ShopPage: NextPage = (props: Props) => {
	return (
		<div>
			<Shop />
		</div>
	)
}

export default ShopPage
