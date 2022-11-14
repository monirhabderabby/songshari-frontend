export default function Error({ message }) {
    return (
        <div className="flex items-center">
            <div className="relative col-span-2 mt-3 bg-red-200 max-w-xl px-4 py-2 text-red-500 rounded shadow w-full duration-500 transition-all">
                <span className="block text-sm">{message}</span>
            </div>
        </div>
    );
}
