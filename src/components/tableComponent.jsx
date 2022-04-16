import React, { useState } from "react";
import { handleSorting } from "../utils/sortField";

const TableComponent = (props) => {
    const matches = props.matches;
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");
    const columns = [
        { label: "Title", accessor: "title", sortable: true },
        { label: "Book Cover", accessor: "cover_i", sortable: false },
        { label: "Author", accessor: "author_name", sortable: false },
        { label: "Publish Date", accessor: "publish_date", sortable: true },
    ];
    
    const handleSortingChange = (accessor) => {
        const sortOrder =
            accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting({sortField : accessor, sortOrder, setMatches : props.setMatches, matches});
    };
    
    return <table>
        <thead>
            <tr>
                {columns.map(({ label, accessor, sortable }) => {
                    return <th key={accessor} className={`col-3 ${sortable ? `${sortField === accessor && order === "asc" ? `sort-asc-${accessor}` : `sort-desc-${accessor}`}` : ``}`} onClick={sortable ? () => handleSortingChange(accessor) : null}>{label}</th>;
                })}
            </tr>
        </thead>
        <tbody>
            {matches && matches.map((match, i) => (
                <tr key={i}>
                    <td>{match.title}</td>
                    <td>{match.cover_i}</td>
                    <td>{match.author_name && match.author_name.map((author, i) => (
                        <span key={i}>{(i ? ', ' : '') + author}</span>
                    ))}
                    </td>
                    <td>{match.publish_date && match.publish_date.map((date, i) => (
                        <span key={i}>{(i ? ', ' : '') + date}</span>
                    ))}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
}

export default TableComponent