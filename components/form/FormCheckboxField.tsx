
type PropTypes = {
    name: string,
    title: string,
    placeholder?: string,
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    checked: boolean
}

export default function FormCheckboxField({ name, title, checked, onInputChange }: PropTypes) {
    console.log("Checked: " + checked);
    return (
        <>
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onInputChange}
                className="px-3 py-1 rounded border-1 border-stone-400 focus:outline-0"
            />
            <label htmlFor="name" className="text-stone-700 pb-2 pl-3">{title}</label>
        </>
    )
}
