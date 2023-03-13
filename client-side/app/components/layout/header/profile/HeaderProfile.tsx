import React from 'react'
import { FiUser } from 'react-icons/fi'

import Column from '@/ui/grid/Column'

import SquareButton from '../squareButton/SquareButton'

type Props = {}

const HeaderProfile = (props: Props) => {
	return (
		<Column size={3}>
			<SquareButton Icon={FiUser} />
			<div className='ml-3'>
				<div className='text-gray'>Eldiar Narynbekov</div>
			</div>
		</Column>
	)
}

export default HeaderProfile
