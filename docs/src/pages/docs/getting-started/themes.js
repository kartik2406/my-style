import React from "react"
import DocPage from "../../../components/docPage"

let themeVars = `.my-theme {
  /* Color schemes */
  /* Background color of the site*/
  --background: #16161a;
  /*Lighter or darker variant of 
  background color or completely new color.
   Will be used as background of cards, list, navbar, footer etc */
  --background-variant: #242629;
  /* Text color of headings, buttons on the site */
  --text-color-primary: #fffffe;
  /* Text color for paragraphs on the site */
  --text-color-secondary: #94a1b2;
  /* First, Second, Third accent colour  of the site,
   can style buttons links, text*/
  --primary: #7f5af0;
  --secondary: #72757e;
  --tertiary: #2cb67d;
  /* If you are using progress bar then it 
   will keep filling with this colour on progress*/
  --progress-bar-status: var(--tertiary);
  /* A lighter version of the progress bar status color, 
  this is to give a visual representation
   of progress bars length to the user */
  --progress-bar-background: rgba(44, 182, 125, 0.5);
  /* The font-style of your website, will be used throughout the app*/
  --base-font-family: "Chivo", sans-serif;
  --base-font-size: 18px;
  /* Padding and sizes */
  /* Customize header height */
  --header-height: 40px;
  /* Margin for the main container*/
  --container-top-margin: 40px;
  /* These two properties are used to set the width, min of them would be used */
  --container-size-percent: 90%;
  --container-size-relative: 72rem;
  /* Overall container padding*/
  --container-padding: 2%;
  /* Left and right padding for cented container*/
  --container-centered-padding: 10%;
  /*When using main and aside classes these 
  values dictate the size of main and aside sections*/
  --content-main-size: 80%;
  --content-aside-size: 20%;
  /* The height of the footer*/
  --footer-height: 100px;
  /* Footers top margin*/
  --footer-margin: 200px;
}
`

let navBarTheme = `.navbar {
  background: var(--background);
}`

let navAndFooterTheme = `.navbar,
.footer {
  background: var(--background);
}`

let prismTheme = `:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: var(--background-variant) !important;
}
`

let importPrismMod = `@import "./node_modules/src/css/themes/prism.css"`
export default function Themes() {
  return (
    <DocPage>
      <section className="width-80">
        <h2> Themes</h2>
        <section className="doc-section">
          <h5> Customizing your theme </h5>
          <p>
            The framework uses CSS variables to store theme colours. You can
            quickly customize the theme by changing them.
          </p>
          <pre>
            <code className="language-css">{themeVars}</code>
          </pre>
          <p>
            Once you have your theme variables ready just apply this class to
            the body and you are done. If you would like you can also define all
            these values under ":root"
          </p>
          <p>
            If you look at this sites dark theme you can see that the header and
            body colours are different. At times you would want the header to
            have the same colour as the body so that they look connected. You
            can easily achieve this by overriding the background colour of the
            navbar class as shown below.
          </p>
          <pre>
            <code className="language-css">{navBarTheme} </code>
          </pre>
          <p> And if you want the same behaviour with the navbar and footer</p>
          <pre>
            <code className="language-css">{navAndFooterTheme} </code>
          </pre>
          <p> The sites light theme is an example of this.</p>
          <p>
            The default theme of the framework is dark, if you want to use light
            theme add the class 'light-theme' to the body tag.
          </p>
        </section>
        <section className="doc-section">
          <h5> Styling code blocks </h5>
          <p>
            For styling code blocks I recommend using the &nbsp;
            <a
              className="link prism-link"
              href="https://prismjs.com/download.html#themes=prism-dark&languages=markup+css+clike+javascript"
              rel="noreferrer"
              target="_blank"
            >
              Prism
            </a>
            &nbsp; library. Prism comes with its themes too. I like the
            "tomorrow night" theme. To make it looks good with the theme of the
            framework we have tweaked the following property of in Prisms CSS
            file.
          </p>
          <pre>
            <code className="language-css">{prismTheme}</code>
          </pre>
          <p>
            This will make the code block background match your theme. To use
            this though import the following file into your sites CSS file as
            the framework does not do this by default.
          </p>
          <pre>
            <code className="language-css">{importPrismMod}</code>
          </pre>
        </section>
      </section>
    </DocPage>
  )
}
