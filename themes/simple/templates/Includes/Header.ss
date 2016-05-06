<header class="header" role="banner">
	<div class="inner">
		<div class="unit size4of4 lastUnit">
			<a href="$BaseHref" class="brand" rel="home">
				<h1>SilverStripe + Angular JS Demo</h1>
				<% if $SiteConfig.Tagline %>
				<p>A demo showing how Angular JS can be used with Silverstripe.</p>
				<% end_if %>
			</a>
			<% if $SearchForm %>
				<span class="search-dropdown-icon">L</span>
				<div class="search-bar">
					$SearchForm
				</div>
			<% end_if %>
		</div>
	</div>
</header>
