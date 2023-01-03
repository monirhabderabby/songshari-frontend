// configuration
import * as React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetProfileDetailsQuery } from "../../../../Redux/features/userInfo/userApi";

export const MobilePersonalDetails = () => {
    // hooks variable
const {id} = useParams();
const navigate = useNavigate();
const { data, isLoading } = useGetProfileDetailsQuery(id);
    return (
       <div>
        <h1>hello {id}</h1>
       </div>
    )
}
