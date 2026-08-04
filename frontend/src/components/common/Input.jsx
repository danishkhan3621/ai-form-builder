export default function Input(props) {
    return (
        <input
            {...props}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}