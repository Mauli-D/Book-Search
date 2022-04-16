export const handleSorting = ({sortField, sortOrder, setMatches, matches}) => {
    if (sortField) {
        const sorted = matches.slice(0).sort((a, b) => {
            if (sortField === "publish_date") {
                const dateA = new Date(a.published_date).getTime();
                const dateB = new Date(b.published_date).getTime();
                return dateA > dateB ? 1 : -1;
            }
            return (
                a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                    numeric: true,
                }) * (sortOrder === "asc" ? 1 : -1)
            );
        });
        setMatches(sorted);
    }
};