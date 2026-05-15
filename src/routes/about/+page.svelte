<script>
    import { asset } from '$app/paths';
    import { PhilosophyCard } from '$lib/components';
</script>


<svelte:head>
    <title>About | Starter Kit</title>
</svelte:head>


<section class="intro section-hero">
    <h1>About me</h1>
    <p>
        Hi, I'm Prince! <br>
        I'm an artist based in Ireland, specialising in graphic design, print design and character design.
        I've also tried my hand at programming (namely C++, HTML, CSS and Javascript) and 3D modelling. <br>
        I'm currently a student in <i>Interactive Digital Arts and Design</i>. <br>
        I'd love to work with you!
    </p>
    <br>
    <br>

    <h2>Follow me on social media!</h2>
    <!--links would be replaced by ones to a specific account-->
    <div class="social-media">
        <a class="social-button" href="https://www.x.com">
            <button type="button" aria-label="Open batter bat twitter account">
                <img src={asset("/images/about/twitter_logo.png")} alt="Twitter logo"/>
            </button>
        </a>

        <a class="social-button" href="https://www.tumblr.com">
            <button type="button" aria-label="Open batter bat tumblr account">
                <img src={asset("/images/about/tumblr_logo.png")} alt="Tumblr logo"/>
            </button>
        </a>

        <a class="social-button" href="https://www.instagram.com">
            <button type="button" aria-label="Open batter bat instagram account">
                <img src={asset("/images/about/instagram_logo.png")} alt="Instagram logo"/>
            </button>
        </a>
    </div>
</section>

<!--<section class="creators">
    <h2>The Creators</h2>
    <div class="grid">
        <figure>
            <figcaption>
                <h3> Holly </h3>
            </figcaption>

            <img src={asset("/images/about/holly.png")} alt="Holly!" />
        </figure>

        <figure>
            <figcaption>
               <h3> Prince </h3>
            </figcaption>

            <img src={asset("/images/about/prince.png")} alt="Prince!" />
        </figure>

        <p>I am the greatest journalist ever, from the moment I was born I knew I was destined to be the best at being a journalist.</p>

        <p>I think perchance, maybe I might have read the news one time when I was five, so yeah I'm extremely qualified.</p>
    </div>
</section>-->

<style>
    section {
        margin-bottom: var(--space-xs);
        padding: var(--space-lg) var(--space-md);
        background: var(--gradient-brand);
        border-radius: var(--radius-md);
        animation: fadeIn 0.6s ease-in;
    }

    section h1 {
        font-family: var(--font-heading);
        font-size: var(--font-xxl);
        margin-bottom: var(--space-sm);
        text-align: center;
        position: relative;
    }

    section h2 {
        font-family: var(--font-heading);
        font-size: var(--font-xl);
        margin-bottom: var(--space-sm);
        text-align: center;
        position: relative;
    }

    section h2::after {
        content: "";
        display: block;
        height: 2px;
        width: 60px;
        margin: var(--space-xs) auto 0 auto;
        border-radius: var(--radius-sm);
    }

    .section-hero {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background: var(--gradient-brand);
    }

    /*.creators {
        background-size: 800px;
        background-repeat: repeat;
        background-position: bottom center;
        opacity: 0.95;
    }*/

    p {
        font-size: var(--font-base);
        color: var(--text-contrast);
        max-width: 700px;
        margin: 0 auto var(--space-md);
        text-align: center;
        line-height: 1.8;
    }

    .social-button img {
        height: 8vh;
    }

    .social-button button {
        padding: var(--space-xs) var(--space-xs);
        background-color: var(--color-accent);
        border-radius: var(--radius-md);
        transition: background-color var(--transition-fast), transform var(--transition-fast);
        box-shadow: var(--shadow-sm);
    }

    .social-media {
        display: flex;
        justify-content: center;
        gap: var(--space-sm);
    }

    /*.grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-lg);
        max-width: 1100px;
        margin: 0 auto;
    }

    figure {
        margin: 0;
        background: var(--color-background);
        border-radius: var(--radius-sm);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
    }

    figure img {
        width: 100%;
        height: auto;
        display: block;
    }

    figcaption {
        padding: var(--space-sm);
        font-size: var(--font-sm);
        color: var(--text-secondary);
        text-align: center;
        background: var(--color-background);
        font-style: italic;
    }*/

    /* Animations */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive tweaks */
    @media (max-width: 768px) 
    {
        /*.principle-grid,
        .virtue-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }

        .principle-grid::after,
        .virtue-grid::after {
            content: "";
            visibility: hidden;
            height: 0;
            width: 180px; /* match min-width of grid items 
        }

        .grid {
            grid-template-columns: 1fr;
        }*/

        .social-button img {
        height: 4vh;
    }

        section h1 {
            font-size: var(--font-xxl);
        }

        section h2 {
            font-size: var(--font-xl);
        }
    }

</style>