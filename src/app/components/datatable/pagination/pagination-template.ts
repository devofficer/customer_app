import { html, isServer } from "lit";
import "./item/index.js";
import { generateQueryUrl } from "../../../utils/index.js";

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
  return { totalPages, startPage, endPage, pageItems };
}

export const template = ({ totalItems, itemsPerPage, currentPage }: PaginationProps) => {
  const { totalPages, pageItems } = getPaginationItems(totalItems, itemsPerPage, currentPage);

  return html`
    <div class="pagination-wrapper">
      ${currentPage > 1 ? html`<defie-datatable-pagination-item data-page=${currentPage - 1}>Prev</defie-datatable-pagination-item>` : ''}
      ${isServer && pageItems.map((pageIndex) => {
        if (pageIndex == currentPage)
          return html`<defie-datatable-pagination-item class="selected" data-page=${pageIndex}>${pageIndex}</defie-datatable-pagination-item>`;
        return html`<defie-datatable-pagination-item data-page=${pageIndex}>${pageIndex}</defie-datatable-pagination-item>`;
      })}
      ${currentPage < totalPages ? html`<defie-datatable-pagination-item data-page=${currentPage + 1}>Next</defie-datatable-pagination-item>` : ''}
    </div>
  `;
}