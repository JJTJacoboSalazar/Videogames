import style from "./style.module.css";
function Pagination({ totalCount, currentPage, pageSize, onPageChange }) {

  const totalPages = Math.ceil(totalCount / pageSize);
  const pageNumbers = usePageNumbers(currentPage, totalPages);
  function usePageNumbers(currentPage, totalPages) {
  
    const maxNumbers = 5;
    let numbers = [];


    if (totalPages <= maxNumbers) {
      numbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    }


    if (totalPages > maxNumbers) {

      let start = 1;
      if(currentPage > 2){
        start = currentPage - Math.floor(maxNumbers / 2);
      }

      let end = 5;
      if(totalPages > 5){
        end = Math.min(totalPages, start + maxNumbers - 1);
      }
      var next = start;
      do{
        numbers.push(next);
      } while (next++ < end)
    }


    return numbers;
  }

  function handlePrevClick() {
    if (currentPage > 1) {
      onPageChange((newPage) => --newPage);
    }
  }

  function handleNextClick() {
    if (currentPage < totalPages) {
      onPageChange((newPage) => ++newPage);
    }
  }

  function handleNumberClick(number) {
    if (number !== currentPage) {
      onPageChange(number);
    }
  }

  /* --------------------------------------------------------------------------------*/
  /* Main */
  /* --------------------------------------------------------------------------------*/
  return (
    <nav aria-label="Navegación por páginas">
      <ul className={style.pagination}>
        {/* Botón primero */}
        <li className={`${style.pageItem}`}>
          <a href="#" className={style.first} onClick={() => handleNumberClick(1)}>
            First
          </a>
        </li>
        {/* Botón previo */}
        <li className={`${style.pageItem} ${currentPage === 1 ? style.disabled : ''}`}>
          <a href="#" className={style.prev} onClick={handlePrevClick}>
            prev
          </a>
        </li>


        {/* Números de página */}
        {pageNumbers.map((number) => (
        <li
        key={number}
        className={`${style.pageItem} ${number === currentPage ? style.active : ''}`}
      >
          <a href="#" onClick={() => handleNumberClick(number)}>
            {number}
          </a>
        </li>
        ))}

        {/* Botón siguiente */}
        <li className={`${style.pageItem} ${currentPage === totalPages ? style.disabled : ''}`}>
          <a href="#" className={style.next} onClick={handleNextClick}>
            next
          </a>
        </li>
            {/* Botón ultimo */}
        <li className={`${style.pageItem}`}>
        <a href="#" className={style.last} onClick={() => handleNumberClick(totalPages)}>
          Last
        </a>
      </li>
      </ul>
    </nav>
  );
}

export default Pagination;
