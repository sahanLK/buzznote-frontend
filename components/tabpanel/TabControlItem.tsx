import { IoList } from "react-icons/io5";


type PropTypes = {
    Icon: React.ElementType,
    text: string,
    tab: number,
} & React.HTMLAttributes<HTMLParagraphElement>;

export default function TabControlItem({Icon, text, ...rest}: PropTypes) {
    return (
        <p className="flex items-center cursor-pointer" {...rest}><Icon className="pr-2" size={25} />{text}</p>
    )
}   
