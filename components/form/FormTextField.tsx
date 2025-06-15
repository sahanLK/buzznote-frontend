
type PropTypes = {
    name: string,
    title: string,
    type?: "text" | "email" | "password",
    placeholder?: string,
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

export default function FormInputField({ name, title, type = 'text', placeholder = '', value, onInputChange }: PropTypes) {
    return (
        <div className="my-6">
            <label htmlFor="name" className="block text-stone-700 pb-1">{title}</label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onInputChange}
                className="px-3 py-1 rounded border-1 border-stone-400 focus:outline-1 focus:border-green-600 w-full"
            />
        </div>
    )
}