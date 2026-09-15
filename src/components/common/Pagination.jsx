function Pagination({
  currentPage,
  totalPages,
  onPageChange
}) {

  const maxVisiblePages = 5;

  let startPage =
    Math.floor((currentPage - 1) / maxVisiblePages)
    * maxVisiblePages + 1;

  let endPage =
    startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
  }

  const pages = [];

  for (let page = startPage; page <= endPage; page++) {
    pages.push(page);
  }

  return (
    <div className="pagination">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={
            currentPage === page
              ? "active"
              : ""
          }
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;