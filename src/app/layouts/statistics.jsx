// import React, { useState } from "react";
// import UserTable from "../components/ui/userTable";
// import Pagination from "../components/common/pagination";
// import { paginate } from "../utils/paginate";
// import _ from "lodash";
// import PropTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     deleteStatistics,
//     getStatistics,
//     getStatisticsLoadingStatus
// } from "../store/statistics";

// function Statistics() {
//     const [currentPage, setCurrenPage] = useState(1);
//     const pageSize = 10;
//     const dispatch = useDispatch();
//     const statistic = useSelector(getStatistics());
//     const isLoading = useSelector(getStatisticsLoadingStatus());
//     const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
//     function handleSort(item) {
//         setSortBy(item);
//     }

//     const handlePageChange = (pageIndex) => {
//         setCurrenPage(pageIndex);
//     };

//     function handleDelete(userId) {
//         dispatch(deleteStatistics(userId));
//     }
//     if (!isLoading && statistic) {
//         const count = statistic.length;

//         const sortedUsers = _.orderBy(statistic, [sortBy.path], [sortBy.order]);
//         const userCrop = paginate(sortedUsers, currentPage, pageSize);

//         return (
//             <div className="block-information">
//                 <div className="block-information">
//                     {count > 0 && (
//                         <UserTable
//                             statistic={userCrop}
//                             onSort={handleSort}
//                             selectedSort={sortBy}
//                             onDelete={handleDelete}
//                         />
//                     )}
//                 </div>
//                 <div className="flex-pagination">
//                     <Pagination
//                         itemCount={count}
//                         pageSize={pageSize}
//                         currentPage={currentPage}
//                         onPageChange={handlePageChange}
//                     />
//                 </div>
//             </div>
//         );
//     }
//     return <h2>Loading....</h2>;
// }
// Statistics.propTypes = {
//     statistic: PropTypes.array
// };
// export default Statistics;
import React from "react";
import { useParams } from "react-router-dom";
import StatisticListPage from "../components/page/statisticListPage/statisticListPage";
import StatisticPage from "../components/page/statisticPage/statisticPage";

const Statistis = () => {
    const params = useParams();
    const { statisticId } = params;
    return <>{statisticId ? <StatisticPage /> : <StatisticListPage />}</>;
};

export default Statistis;
