// Third party packages, ex: redux
import { MdErrorOutline } from "react-icons/md";

export default function Error({ message }) {
    return (
        <div className="flex items-center w-full">
            <div className="relative col-span-2 mt-3 bg-red-200 px-3 py-2 text-red-500 rounded shadow w-full duration-500 transition-all flex items-center">
                <MdErrorOutline className="mr-[5px]" />
                <span className="block text-[11px]">{message}</span>
            </div>
        </div>
    );
}
