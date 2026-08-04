export default function Button({
    children,
    variant = "primary",
    ...props
}) {
    const styles = {
        primary:
            "bg-blue-600 hover:bg-blue-700 text-white",

        secondary:
            "bg-red-500 hover:bg-red-600 text-white",
    };

    return (
        <button
            {...props}
            className={`px-6 py-2 rounded-lg ${styles[variant]}`}
        >
            {children}
        </button>
    );
}