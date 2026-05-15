<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
    import { CatalogueCard, Modal } from '$lib/components';
    import { catalogue } from '$lib/stores/catalogueStore.js';
    import { currentQuote, setRandomQuote } from '$lib/stores/quoteStore.js';
    
    let showQuoteModal = false;
    let message = " ";
    let emailSubmit = false;

    /**
     * Select a few featured items — e.g., first 4 items
	 * @type {any[]}
	 */
    let featuredItems = [];

    $: $catalogue && (featuredItems = $catalogue.slice(0, 4));

    function openQuoteModal() {
        setRandomQuote();
        showQuoteModal = true;
    }

    function handleSubmit() {
        emailSubmit = true;
    }

    function sumbitted() {
        /*alert("I'll get back to you soon!");*/
        confirm("I'll get back to you soon!");
    }
</script>


<svelte:head>
    <title>BATTER BAT</title>
</svelte:head>


<!-- Page Container -->
<div class="home-container">

    <!-- Featured Catalogue Section -->
    <section class="featured">
        <h2>Artist, designer, beginner programmer</h2>
        <!--<div class="card-grid">
            {#each featuredItems as item, index}
                <button
					type="button"
					class="card-button"
					on:click={() => goto(resolve('/catalogue/[title]', { title: item.title }))}
					aria-label={`View details for ${item.title}`}
				>
                    <CatalogueCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        category={item.category}
                        tags={item.tags}
                        animationDelay={index * 80}
                        article={item.article}
                    />
                </button>
            {/each}
        </div>-->

        <form class="contact-form" on:submit={handleSubmit}>
            <h1>Get in touch:</h1>
            <label for="user-email">your email address</label>
            <input type="email" id="user-email" required
                placeholder="name@email.com">

            <label for="message">your message</label>
            <textarea name="message" bind:value={message}></textarea>
            <button class="contact-button" type="submit">Contact me!</button>
        </form>

        {#if emailSubmit}
            <script>sumbitted();</script>
        {/if}

        <a class="browse-link" href="{resolve('/design')}">Take a look at some of my work! →</a>
    </section>

    <!-- About Teaser Section 
    <section class="about-teaser">
       
    </section> -->

    <!-- Quote Modal -->
    <!--<Modal
        bind:isOpen={showQuoteModal}
        {...$currentQuote}
        onClose={() => (showQuoteModal = false)}
    />-->
</div>


<style>
    .home-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    /* Featured Section */
    .featured {
        padding: 0 var(--space-md);
        background: var(--gradient-brand);
    }

    .featured h2 {
        text-align: center;
        font-family: var(--font-heading);
        font-size: var(--font-xl);
        margin-bottom: var(--space-xl);
        margin-top: var(--space-xl);
    }

	/* Ensure button styling doesn’t interfere */
	/*.card-button {
		all: unset; /* Remove default button styles 
		cursor: pointer;
		display: block;
		text-align: inherit;
	}

	.card-button:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 4px;
	}

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: var(--space-lg);
        margin-bottom: var(--space-md);
    }*/
    
    .contact-form {
        color: var(--text-contrast);
        background-color: var(--color-accent);
        padding: 10px 40px;
        width: 30%;
        display: block;
        margin: 0 auto;
        margin-top: var(--space-xl);
        border-radius: var(--radius-md);
    }

    .contact-form h1 {
        text-align: center;
    }

    .contact-form textarea {
        max-width: 100%;
        min-width: 100%;
    }
    
    .contact-button {
        margin: 0 auto;
        display: block;
        margin-top: var(--space-md);
        margin-bottom: var(--space-lg);
        padding: var(--space-sm) var(--space-lg);
        background-color: var(--color-primary);
        color: var(--text-contrast);
        text-decoration: none;
        border-radius: var(--radius-md);
        font-weight: 800;
        font-size: var(--font-base);
        transition: background-color var(--transition-fast), transform var(--transition-fast);
        box-shadow: var(--shadow-sm);
    }

    .browse-link {
        display: block;
        text-align: center;
        margin-top: var(--space-lg);
        margin-bottom: var(--space-xl);
        font-weight: 500;
        text-decoration: none;
        color: var(--color-accent);
    }

    /* About Teaser 
    .about-teaser {
        text-align: center;
        padding: var(--space-lg) var(--space-md);
        background-color: var(--color-background);
    }*/

    @media (max-width: 640px) {
        section {
            height: 700px;
        }

        .contact-form {
            width: 90%;
        }
    }

</style>
