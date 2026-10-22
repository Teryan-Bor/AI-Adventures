import "./fieldSection.scss";

export const FieldSection = ({ name, value, type, placeholder, onChange, options = [] })  => {
	return (
		<div className="field-section">
			{type === 'select' && (
				<select 
					name={name}
					id={name}
					value={value || ''}
					onChange={e => onChange(name, e.target.value)}
					className="select-item">
					{options.map(optionItem => (
						<option key={optionItem} value={optionItem}>
							{optionItem}
						</option>
					))}
				</select>
			)}

			{type === 'textarea' && (
				<textarea 
					name={name}
					id={name}
					value={value || ''}
					onChange={e => onChange(name, e.target.value)}
					className="input-field textarea-field"
				/>
			)}

			{type === 'text' && (
				<input 
					name={name}
					type={type}
					value={value || ''}
					placeholder={placeholder}
					onChange={(e) => onChange(name, e.target.value)}
					className="input-field" 
				/>
			)}

		</div>
	)
}