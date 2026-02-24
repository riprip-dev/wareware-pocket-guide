const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addPassthroughCopy("pages/assets/");

	eleventyConfig.addFilter("startsWith", require("./pages/_11ty/filters/startsWith"));

	const slugify = require("slugify");
	eleventyConfig.addFilter("slug", (input) => {
		const options = {
			replacement: "-",
			remove: /[\/&,+()$~%.'":*?<>{}]/g,
			lower: true,
		};
		return slugify(input, options);
	});

	return {
		dir: {
			input: "pages",
			includes: "_includes",
			output: "_site",
		},
	};
};
