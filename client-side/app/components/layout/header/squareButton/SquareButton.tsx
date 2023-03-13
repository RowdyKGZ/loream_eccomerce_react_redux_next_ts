import { FC } from 'react'
import { IconType } from 'react-icons'
import { AiFillChrome } from 'react-icons/ai'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<button
			onClick={onClick}
			className='h-10 w-10 bg-black flex items-center justify-center hover:bg-[#131212] transition-colors duration-200 relative'
		>
			<Icon color='#7D7D7D' size={20} />

			{!!number && (
				<span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary p-0.5 text-[0.7rem] text-white absolute -top-1 -right-1'>
					{number}
				</span>
			)}
		</button>
	)
}

export default SquareButton
