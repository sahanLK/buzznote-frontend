
type PropTypes = {
    text: string,
    onClick?: () => void;
}

export default function FormSubmitButton({ text, onClick }: PropTypes) {

    return (
        <button type="submit" className="block text-white bg-green-600 px-5 py-2 rounded text-sm my-5">{text}</button>
    )
}