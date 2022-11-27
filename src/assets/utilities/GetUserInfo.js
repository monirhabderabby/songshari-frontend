import { useGetProfileDetailsQuery } from "../../Redux/features/userInfo/userApi";

export const getUserInfo = async id => {
    const { data, isLoading } = useGetProfileDetailsQuery(id);
    return { data, isLoading };
};
