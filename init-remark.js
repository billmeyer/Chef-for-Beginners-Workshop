var slideshow = remark.create({
	highlightLanguage: 'javascript',
	highlightStyle: 'monokai',
	highlightLines: 'true',
	highlightSpans: 'true',

	// Set the slideshow display ratio
	// Default: '4:3'
	// Alternatives: '16:9', ...
	ratio: '4:3',

	// Navigation options
	navigation: {
		// Enable or disable navigating using scroll
		// Default: true
		// Alternatives: false
		scroll: true,

		// Enable or disable navigation using touch
		// Default: true
		// Alternatives: false
		touch: true,

		// Enable or disable navigation using click
		// Default: false
		// Alternatives: true
		click: false
	},

	// Customize slide number label, either using a format string..
	slideNumberFormat: 'Slide %current% of %total%',

	// .. or by using a format function
	slideNumberFormat: function (current, total) {
		return 'Slide ' + current + ' of ' + total;
	},

	// Enable or disable counting of incremental slides in the slide counting
	countIncrementalSlides: true
});

// extract the embedded styling from ansi spans
// 		$('code.terminal > span.hljs-ansi').replaceWith(function(i, x) {
$('span.hljs-ansi').replaceWith(function(index, tag) {
	result = tag.replace(/&lt;(\/?(\w+).*?)&gt;/g, '<$1>')
	return result;
});
