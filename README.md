## Help Widget

This is a template for adding a generic intercom-like help widget to your site. 

[Check out the demo.](https://help-widget.netlify.com)

Based on [JS Widget.](https://github.com/jenyayel/js-widget)

## Develop
- `yarn`
- `yarn start`

## Use
- `yarn`
- `yarn build release`
- Add this to your html:
```javascript
  (function (w,d,s,o,f,js,fjs) {
    w['help-widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'hw', './widget.js'));
  hw('init', { });
  hw('message', '');
```
- Replace widget.js with built javascript file

## 🙋🏻‍♂️ Made by [@alisalahio](https://twitter.com/alisalahio)

- 🙀 [Instatus](https://instatus.com) - Hosted status pages.
- 🤓 [Sipreads](https://sipreads.com) - Takaways from the best nonfiction books.
- 🍪 [Gatsby plugin metomic](https://github.com/alisalahio/gatsby-plugin-metomic) - Add an easy cookie consent to your Gatsby site.
- 👋 [Gatsby portfolio + blog](https://www.gatsbyjs.org/starters/alisalahio/gatsby-starter-blog-and-portfolio/) - Create a portfolio using gatsby.
