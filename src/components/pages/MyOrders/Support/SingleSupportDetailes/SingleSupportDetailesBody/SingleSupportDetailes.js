import React from "react";
import { useParams } from "react-router";
import { useGetTicketByIDQuery } from "../../../../../../Redux/features/Ticket/ticketApi";
import { LineWaveLoader } from "../../../../../shared/Cards/Loader/lineWaveLoader/LineWaveLoader";
import { ServerErrorMessage } from "../../../../../ui/error/ServerErrorMessage";
import { SingleSupportDetailesFooter } from "../Footer/SingleSupportDetailesFooter";
import { SingleSupportDetailesBody } from "./SingleSupportDetailesBody";
import { SingleSupportDetailesHeader } from "./SingleSupportDetailesHeader";

export const SingleSupportDetailes = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetTicketByIDQuery(id);
    const { ticket } = data || {};

    let content;
    if (isLoading) {
        content = (
            <div className="h-[250px] w-full flex justify-center items-center">
                <LineWaveLoader />
            </div>
        );
    } else if (!isLoading && isError) {
        content = (
            <div className="h-[250px] w-full flex justify-center items-center">
                <ServerErrorMessage />
            </div>
        );
    } else if (!isLoading && ticket) {
        content = (
            <div>
                <SingleSupportDetailesHeader ticket={ticket} />
                <SingleSupportDetailesBody />
                <SingleSupportDetailesFooter />
            </div>
        );
    }
    return content;
};
