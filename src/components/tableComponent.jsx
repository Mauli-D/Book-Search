import React, { useState } from "react";
import { handleSorting } from "../utils/sortField";
import Pagination from "./pagination";
import TableData from "./tableData";

const TableComponent = (props) => {
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
        handleSorting({ sortField: accessor, sortOrder, setMatches: props.setMatches, matches: props.matches });
    };

    return <>
        <div className="table">
            <div className="table-body">
                <div className="table-row">
                    {columns.map(({ label, accessor, sortable }) => {
                        return <div key={accessor} className={`col-3 table-head-data ${sortable ? `${sortField === accessor && order === "asc" ? `sort-asc-${accessor}` : `sort-desc-${accessor}`}` : ``}`} onClick={sortable ? () => handleSortingChange(accessor) : null}>{label}</div>;
                    })}
                </div>
                <Pagination
                    data={props.matches}
                    RenderComponent={TableData}
                    pageLimit={5}
                    dataLimit={10}
                />
            </div>
        </div>
    </>
}

export default TableComponent