# mozilla-developer-html-css-javascript

[CSS guidelines for MDN code examples.](https://wiki.developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS#Dont_use_preprocessors)

[html validator](https://validator.w3.org/)

[css validator](https://jigsaw.w3.org/css-validator/)

[direction mode](https://wiki.developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)

[opacity](https://wiki.developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)


[learning area](https://github.com/mdn/learning-area)

[video player git](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn)

[netlify deployment](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/)

[defer](https://wiki.developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
```
In the external example, we use a more modern JavaScript feature to solve the problem, the defer attribute, which tells the browser to continue downloading the HTML content once the <script> tag element has been reached.

<script src="script.js" defer></script>
In this case both the script and the HTML will load simultaneously and the code will work.

Note: In the external case, we did not need to use the DOMContentLoaded event because the defer attribute solved the problem for us. We didn't use the defer solution for the internal JavaScript example because defer only works for external scripts.
```