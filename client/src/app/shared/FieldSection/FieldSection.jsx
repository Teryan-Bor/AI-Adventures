import "./fieldSection.scss";

export const FieldSection = ({ name, label, type, options = [] })  => {
	return (
		<div className="field-section">
			<label htmlFor={name}> 
				{label}
			</label>

			{options.length > 0 ? (
				<select name={name} id={name} className="select-item">
					{options.map(optionItem => (
						<option key={optionItem} value={optionItem}>
							{optionItem}
						</option>
					))}
				</select>
			) : (
				<input name={name} type={type} className="input-field" />
			)}
			
		</div>
	)
}