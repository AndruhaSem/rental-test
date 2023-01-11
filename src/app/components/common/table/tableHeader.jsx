import React from "react";
import PropTypes from "prop-types";

function TableHeader({ columns, onSort, selectedSort }) {
    function handleSort(item) {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    }
    return (
        <thead className="tbl-header">
            <tr className="table100-head">
                {Object.keys(columns).map((column) => (
                    <th
                        className="column3"
                        key={column}
                        onClick={() =>
                            columns[column].path
                                ? handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                    >
                        {columns[column].name}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
TableHeader.propTypes = {
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableHeader;
