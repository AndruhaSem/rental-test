import React from "react";
import TableBody from "../table/tableBody";
import TableHeader from "../table/tableHeader";
import PropTypes from "prop-types";

function Table({ columns, data, onSort, selectedSort }) {
    return (
        <table>
            <TableHeader {...{ columns, onSort, selectedSort }} />
            <TableBody {...{ columns, data }} />
        </table>
    );
}
Table.propTypes = {
    data: PropTypes.array,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object,
    children: PropTypes.array
};
export default Table;
