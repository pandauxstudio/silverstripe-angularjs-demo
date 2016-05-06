<% include SideBar %>
<div class="content-container unit size3of4 lastUnit">
	<article>
		<div class="content">
			<h2>This website demonstrates Angular JS working with Silverstripe.</h2>
			<h3>AngularJS loading AJAX data from Silverstripe</h3>
			<p ng-show="!localDataReady">Loading...</p>
			<p ng-bind="localData"></p>
			<h3>AngularJS loading cross-domain AJAX data</h3>
			<p ng-show="!crossDomainDataReady">Loading...</p>
			<pre class="ng-hide" ng-show="crossDomainDataReady" ng-bind="crossDomainData"></pre>
		</div>
	</article>
		$Form
		$CommentsForm
</div>