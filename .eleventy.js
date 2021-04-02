module.exports = function(config) {

	// Adds the robots.txt file to the site for SEO bot controls
	config.addPassthroughCopy("./robots.txt");

	return {
		dir: {
			input: "./src/pages",
			output: "dist",
			includes: "../_includes",
			data: "../data"
		},
		templateFormats: ["html", "md", "njk", "css"],
		htmlTemplateEngine: "njk",
		markdownTemplate: "njk",
		setUseGitIgnore: false
	};
}