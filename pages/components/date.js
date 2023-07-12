import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
    const date = dateString ? parseISO(dateString) : "";
    return date ? (
        <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
    ) : (
        <time>{"--"}</time>
    );
}
