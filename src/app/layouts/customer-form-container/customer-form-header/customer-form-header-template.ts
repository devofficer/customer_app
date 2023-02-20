import { html } from "lit";

export const template = () => {
  return html`
    <div class="panel-header">
      <div class="panel-header-item">
        <div class="panel-header-desc">
          <span>47657 Lakeview Blvd., Fremont, CA 94538 USA</span>
        </div>
        <div class="panel-header-desc">
          <slot name="desc"></slot>
        </div>
      </div>
      <div class="panel-header-item">
        <div class="panel-header-desc">
          <span>Phone:</span>
          <span>510 657 8981</span>
        </div>
        <div class="panel-header-desc">
          <span>Date:</span>
          <span>03/04/2021</span>
        </div>
      </div>
      <div class="panel-header-item">
        <div></div>
        <slot name="action"></slot>      
      </div>
    </div>
  `;
}