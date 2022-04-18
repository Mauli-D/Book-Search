import React from "react";

const TableData = (props) => {
    const {
        title, cover_i, author_name, publish_date
    } = props && props.data
    return <div className="table-row">
        <div className="table-body-data col-3">{title}</div>
        <div className="table-body-data col-3">
            {cover_i &&
                <img className="image" src={`https://covers.openlibrary.org/b/id/${cover_i}.jpg`} alt="cover_image" />
            }
        </div>
        <div className="table-body-data col-3">{author_name && author_name.map((author, i) => (
            <span key={i}>{(i ? ', ' : '') + author}</span>
        ))}
        </div>
        <div className="table-body-data col-3">{publish_date && publish_date.map((date, i) => (
            <span key={i}>{(i ? ', ' : '') + date}</span>
        ))}
        </div>
    </div>
}

export default TableData