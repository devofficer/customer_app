import { html } from "lit";

interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
}

const getPaginationItems = (totalItems: number, itemsPerpage: number, currentPage: number) => {
  const paginationItemCount = 9;
  const middlePaginationItemIndex = Math.floor(paginationItemCount / 2);
  const totalPages = Math.ceil(totalItems / itemsPerpage);
  let startPage, endPage;
  if (totalPages <= paginationItemCount) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= middlePaginationItemIndex + 1) {
      startPage = 1;
      endPage = paginationItemCount;
    } else if (currentPage + middlePaginationItemIndex >= totalPages) {
      startPage = totalPages - paginationItemCount + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - middlePaginationItemIndex;
      endPage = currentPage + middlePaginationItemIndex;
    }
  }

  const pageItems = [];
  if (startPage > 1) pageItems.push("...");
  for (var page = startPage; page <= endPage; page++) {
    pageItems.push(page);
  }
  if (endPage < totalPages) pageItems.push("...");
  if(pageItems.length == 0)
    pageItems.push('aa');  
  return { totalPages, startPage, endPage, pageItems };
}

export const template = ({ totalItems, itemsPerPage, currentPage }: PaginationProps) => {
  const { totalPages, pageItems } = getPaginationItems(totalItems, itemsPerPage, currentPage);

  return html`
    <div class="pagination-wrapper">
      ${currentPage > 1 ? html`<span class="pagination-item tool-btn"><a href="/view?page=${currentPage - 1}">Prev</a></span>` : ''}
      ${pageItems.map((pageIndex) => {
        if (pageIndex == currentPage)
          return html`<span class="pagination-item selected"><a href="/view?page=${pageIndex}">${pageIndex}</a></span>`;
        return html`<span class="pagination-item"><a href="/view?page=${pageIndex}">${pageIndex}</a></span>`;
      })}
      ${currentPage < totalPages ? html`<span class="pagination-item tool-btn"><a href="/view?page=${currentPage + 1}">Next</a></span>` : ''}
    </div>
  `;
}