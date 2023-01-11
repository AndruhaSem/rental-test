import React, { useState } from "react";
import UserTable from "../components/ui/userTable";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import PropTypes from "prop-types";
import { useStatistics } from "../hooks/useStatistics";

function Statistics() {
    const [currentPage, setCurrenPage] = useState(1);
    const pageSize = 10;
    const [sortBy, setSortBy] = useState({ path: "id", order: "asc" });
    const { statistic, isLoading, removeStatistic } = useStatistics();
    function handleSort(item) {
        setSortBy(item);
    }
    const handlePageChange = (pageIndex) => {
        setCurrenPage(pageIndex);
    };

    function handleDelete(userId) {
        removeStatistic(userId);
    }
    if (!isLoading && statistic) {
        const count = statistic.length;
        const sortedUsers = _.orderBy(statistic, [sortBy.path], [sortBy.order]);
        const userCrop = paginate(sortedUsers, currentPage, pageSize);

        return (
            <div className="block-information">
                <div className="block-information">
                    {count > 0 && (
                        <UserTable
                            statistic={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                        />
                    )}
                </div>
                <div className="flex-pagination">
                    <Pagination
                        itemCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        );
    }
    return <h2>Loading....</h2>;
}
Statistics.propTypes = {
    statistic: PropTypes.array
};
export default Statistics;
