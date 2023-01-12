import { apiBaseUrl } from "../../../config";

const liveLinkGenerator = fileName => {
    const link = `${apiBaseUrl}/${fileName}`;

    return link;
};

export default liveLinkGenerator;
