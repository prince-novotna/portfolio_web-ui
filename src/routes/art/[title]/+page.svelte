<script>
    // Bring in the navigation helper
    import { fade } from 'svelte/transition';
    import { resolve, asset } from '$app/paths';
	import { goto } from '$app/navigation';
	import { catalogue } from '$lib/stores';
	import { CatalogueCard } from '$lib/components';

    // `data` is automatically provided by the load function from +page.js
    export let data;

	/** @type {any[]} */
	let relatedItems = [];

	// Destructure item from the loaded data
	$: item = data.item; // reactive assignment ensures updates
	
	$: animationKey = `${item.title}-${relatedItems.map(i => i.title).join(',')}`;
</script>


<svelte:head>
	<title>{item.title} | Batter Bat</title>
</svelte:head>


<section class="item-detail">
	<div class="detail-content">
		<img class="hero-image" src={asset(item.image)} alt={`Image for ${item.title}`} />

		<h1>{item.title}</h1>
		<p class="category">{item.category}</p>
		<p class="description">{item.description}</p>
	</div>
</section>

{#if relatedItems.length > 0}
	<section class="related">
		<h2>Related Items</h2>
		{#key animationKey}
			<div class="related-grid">
				{#each relatedItems as item, index}
					<button
						type="button"
						class="card-button"
						on:click={() => goto(resolve('/art/[title]', { title: item.title }))}
						aria-label={`View details for ${item.title}`}
					>
						<CatalogueCard
							title={item.title}
							description={item.description}
							image={item.image}
							category={item.category}
                        	animationDelay={index * 100}
						/>
					</button>
				{/each}
			</div>
		{/key}
	</section>
{/if}


<style>
	.item-detail {
		position: relative;
		padding: var(--space-lg) var(--space-md);
		display: flex;
		justify-content: center;
		align-items: flex-start;
        background-size: 200px;
        background-repeat: repeat;
        background-color: var(--gradient-brand);
	}
	
	.detail-content {
		max-width: 720px;
		margin: 0 auto;
		text-align: left; /* Left-align text so that tags wrap naturally */
		padding: var(--space-md) var(--space-sm);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.hero-image {
		width: 100%;
		border-radius: var(--radius-lg);
		margin-bottom: var(--space-md);
	}

	.detail-content h1 {
		margin: 0; /* Remove default margins */
		font-size: var(--font-xl);
		line-height: 1.2;
	}

	.category {
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-secondary);
		margin: 0; /* Keep it tight under the heading */
	}

	.description {
		margin: 0; /* Remove extra margins */
		line-height: 1.65;
		color: var(--text-contrast);
	}

	/* Related Section */
	.related {
		margin-top: var(--space-xl);
		padding: var(--space-lg) var(--space-md);
		/* background-image: url('/images/backgrounds/rice-texture.png');*/
        background-size: 800px;
        background-repeat: repeat;
        background-color: var(--color-background);
	}

	.related h2 {
		margin-top: 0;
		margin-bottom: var(--space-md);
		font-family: var(--font-heading);
		font-size: var(--font-xl);
		text-align: center;
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-lg);
		justify-items: center;
	}

	/* Ensure button styling doesn’t interfere */
	.card-button {
		all: unset; /* Remove default button styles */
		cursor: pointer;
		display: block;
		text-align: inherit;
	}

	.card-button:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 4px;
	}

	/* Mobile adjustments */
	@media (max-width: 768px) {
		.item-detail {
			padding: var(--space-md) var(--space-sm);
		}

		.detail-content {
			padding: var(--space-sm);
			gap: var(--space-sm);
		}

		.hero-image {
			max-height: 250px;
			margin-bottom: var(--space-sm);
		}

		.related {
			padding: var(--space-md) var(--space-sm);
		}
	}

</style>