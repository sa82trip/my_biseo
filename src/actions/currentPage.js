const setCurrentPage = (currentPage) => {
  console.log("current page", currentPage);
  return {
    type: currentPage,
  };
};
export default setCurrentPage;
