interface FilterProps {
	name: string;
	label: string;
	handleChange: (value: string) => void;
}

const Filter = ({ name, label, handleChange }: FilterProps) => {
	return (
		<div
			className={`flex ${
				name === 'oldest'
					? 'flex-row items-center'
					: 'flex-col items-start'
			}  gap-2 `}
		>
			<label htmlFor={name} className="p-2">
				{label}
			</label>
			<input
				id={name}
				onChange={(e) => handleChange(e.target.value)}
				className={`${name === 'oldest' ? 'w-5 h-5' : ''}`}
				type={name === 'oldest' ? 'checkbox' : 'text'}
			/>
		</div>
	);
};

export default Filter;
