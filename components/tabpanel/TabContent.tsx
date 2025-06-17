
type PropTypes = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function TabContent({ children, ...rest }: PropTypes) {
    return <div {...rest}>{children}</div>;
}
