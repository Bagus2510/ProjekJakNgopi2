export default function NavbarButton(props) {
    const { children } = props
    return (
        <button className="hover:bg-[#74512D] rounded-full transition-all px-3 py-1 delay-150 duration-300" type="submit">
            {children}
        </button>
    )
}