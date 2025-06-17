
type PropTypes = {
    text: string,
    onClick?: () => void;
}

export default function FormSubmitButton({ text }: PropTypes) {

    return (
        <button type="submit" className="block text-white bg-[#017e89] px-5 py-2 rounded my-5 w-full mt-10 cursor-pointer">
            {text}
        </button>
    )
}