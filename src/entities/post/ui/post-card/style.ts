export const cardStyle: { [string: string]: React.CSSProperties } = {
	card: {
		display: 'flex',
		gap: '10px',
		flexDirection: 'column',
		transform: 'translateX(-50%)',
		minWidth: '300px',
		maxWidth: '800px',
		padding: '10px',
		border: '1976d2 1px solid',
		borderRadius: '5px',
		background: '#2c2c2c',
		color: '#eee',
	},
	body: {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		fontSize: '1.15rem',
	},
	title: {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textAlign: 'center',
		color: '#eee',
	},
};