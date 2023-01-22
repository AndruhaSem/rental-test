import React, { useState } from "react";
import UserTable from "../../ui/userTable";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import _ from "lodash";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteStatistics,
    getStatistics,
    getStatisticsLoadingStatus
} from "../../../store/statistics";

function StatisticListPage() {
    const [currentPage, setCurrenPage] = useState(1);
    const pageSize = 10;
    const dispatch = useDispatch();
    const statistic = useSelector(getStatistics());
    const isLoading = useSelector(getStatisticsLoadingStatus());
    const [sortBy, setSortBy] = useState({ path: "id", order: "asc" });
    function handleSort(item) {
        setSortBy(item);
    }

    const handlePageChange = (pageIndex) => {
        setCurrenPage(pageIndex);
    };

    function handleDelete(userId) {
        dispatch(deleteStatistics(userId));
    }
    if (!isLoading && statistic) {
        const count = statistic.length;

        const sortedUsers = _.orderBy(statistic, [sortBy.path], [sortBy.order]);
        const userCrop = paginate(sortedUsers, currentPage, pageSize);

        return (
            <div className="block-informationn">
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
StatisticListPage.propTypes = {
    statistic: PropTypes.array
};
export default StatisticListPage;
