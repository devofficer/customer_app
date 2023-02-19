import { TemplateResult, html } from 'lit';
import "./pages/create.js";
import "./pages/view.js"

const render = (pageContent: TemplateResult, lazyImport: TemplateResult) => {
  return html`
    <!doctype html>
    <html>
      <head>
        <title>Defie</title>
      </head>
      <style>
        body[dsd-pending] {
          display: none;
        }
      </style>
      <meta name="description" content="description">
      <meta name="keywords" content="">
      <meta name="author" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="theme-color" content="#3367D6">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="main.bundle.css">
      <body dsd-pending>
        <script>
          if (HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
            // This browser has native declarative shadow DOM support, so we can
            // allow painting immediately.
            document.body.removeAttribute('dsd-pending');
          }
        </script>
        ${pageContent}
        <script type="module">
        // Start fetching the Lit hydration support module (note the absence
        // of "await" -- we don't want to block yet).
        const litHydrateSupportInstalled = import(
          '/node_modules/lit/experimental-hydrate-support.js'
        );

        if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
          // Fetch the declarative shadow DOM polyfill.
          const {hydrateShadowRoots} = await import(
            './node_modules/@webcomponents/template-shadowroot/template-shadowroot.js'
          );

          // Apply the polyfill. This is a one-shot operation, so it is important
          // it happens after all HTML has been parsed.
          hydrateShadowRoots(document.body);

          // At this point, browsers without native declarative shadow DOM
          // support can paint the initial state of your components!
          document.body.removeAttribute('dsd-pending');
        }
        await litHydrateSupportInstalled;
        // Import component modules causing them to become interactive
      </script>
      ${lazyImport}
    </body>
    </html>
  `;
}


// we need to define the interface for customers
export const renderViewPage = (customers: any) => {
  const pageContent = html`<defie-page-customer-view .customers=${customers}></defie-page-customer-view>`;
  const lazyImport = html`<script type="module">import('./dist/app/pages/view.js')</script>`;
  return render(pageContent, lazyImport);
}

export const renderCreatePage = () => {
  const pageContent = html`<defie-page-customer-create></defie-page-customer-create>`;
  const lazyImport = html`<script type="module">import('./dist/app/pages/create.js')</script>`;
  return render(pageContent, lazyImport);
}