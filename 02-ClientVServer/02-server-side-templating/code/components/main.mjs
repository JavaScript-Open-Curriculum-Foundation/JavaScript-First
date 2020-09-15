export const Masonary = (nav,body) => {
    return `
    <!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
        <meta name="generator" content="Hugo 0.72.0">
        <title>Masonry example · Bootstrap</title>
    
        <link rel="canonical" href="https://v5.getbootstrap.com/docs/5.0/examples/masonry/">
    
        <!-- Bootstrap core CSS -->
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
            integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
            integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
            crossorigin="anonymous"></script>

        <meta name="theme-color" content="#7952b3">
    
    
        <style>
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
    
            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }
        </style>
    
    
    </head>
    
    <body>
        ${nav}
        <div class="container py-5">
            <h1>Bootstrap and Masonry</h1>
            <p class="lead">Integrate <a href="https://masonry.desandro.com/">Masonry</a> with the Bootstrap grid system and
                cards component.</p>
    
            <p>Masonry is not included in Bootstrap. Add it by including the JavaScript plugin manually, or using a CDN like
                so:</p>
    
            <pre><code>
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.2/masonry.pkgd.min.js&quot; integrity=&quot;sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D&quot; crossorigin=&quot;anonymous&quot; async&gt;&lt;/script&gt;
      </code></pre>
    
            <p>By adding <code>data-masonry='{"percentPosition": true }'</code> to the <code>.row</code> wrapper, we can
                combine the powers of Bootstrap's responsive grid and Masonry's positioning.</p>
    
            <hr class="my-5">
    
            <div class="row" data-masonry='{"percentPosition": true }'>
                ${body}=
            </div>
    
        </div>
    
    
    
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.2/masonry.pkgd.min.js"
            integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`;
}


