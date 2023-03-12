import Image from 'next/image'
import Link from 'next/link'

import Column from '@/ui/grid/Column'

const HeaderLogo = () => {
	return (
		<Column size={2}>
			<Link href='/'>
				<Image
					src='/images/logo.svg'
					width={100}
					height={100}
					alt='lorian shop'
				/>
				<span>LOREAM</span>
				<span>STORE</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
