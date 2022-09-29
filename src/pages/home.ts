export const home = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hack/0.8.1/hack.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hack/0.8.1/dark-grey.css" />
    <title>gh hits</title>
  </head>
  <body class="hack container dark-grey">
    <h1>gh-hits.</h1>
    <p>Dead simple view counter for your Github profile.</p>
    <h2>Example:</h2>
    <img src="/view?username=serranoarevalo" />
    <p>See it <a href="https://github.com/serranoarevalo" target="_blank">live &rarr;</a></p>
    <h2>Get yours:</h2>
    <ul>
      <li>Create a public repository with a name that matches your GitHub username.</li>
      <li>Create a README.md file on that repository.</li>
      <li>Copy paste this code: <code>![](https://gh-hits.nomadcoders.workers.dev/view?username=$USERNAME)</code></li>
      <li>Replace <code>$USERNAME</code> with <b>your</b> Github username.</code></li>
    </ul>
    <h3>Notes:</h3>
    <p>To prevent abuse this only works for github profiles.</p>
    <hr />
    <small>Made with 🤍 by <a href="https://github.com/serranoarevalo">니꼬</a> in 🇰🇷</small>
  </body>
</html>
`;
