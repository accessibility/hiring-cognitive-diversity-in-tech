module.exports = function(config) {
    return {
	dir: {
	    input : "./src/pages",
	    output : "dist",
	    includes : "../_includes",
	    data : "../data"
	},
	templateFormats : ["html", "md", "njk", "css"],
	htmlTemplateEngine : "njk",
	markdownTemplate : "njk",
	setUseGitIgnore : false
    };
}
