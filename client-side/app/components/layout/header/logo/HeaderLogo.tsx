import Image from 'next/image'
import Link from 'next/link'

import Column from '@/ui/grid/Column'

const HeaderLogo = () => {
	return (
		<Column size={2}>
			<Link href='/' className='flex items-center pl-2'>
				<Image
					src='/images/logo.svg'
					width={100}
					height={100}
					alt='lorian shop'
					className='-mr-3'
				/>
				<span>
					<span className='text-white tracking-[0.15em] font-light block'>
						LOREAM
					</span>
					<span className='tracking-[0.4em] text-dark-gray font-extralight block'>
						STORE
					</span>
				</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
