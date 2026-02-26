const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItGHA = require("markdown-it-github-alerts").default;

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	const options = {
		html: true,
	};

	const markdownLib = markdownIt(options).use(markdownItGHA);
	eleventyConfig.setLibrary("md", markdownLib);

	eleventyConfig.addPassthroughCopy("pages/assets/");
	eleventyConfig.addPassthroughCopy("pages/tutorial/");

	eleventyConfig.addFilter("startsWith", require("./pages/_11ty/filters/startsWith"));

	eleventyConfig.addShortcode("key", (arg) => `<span class="key">${arg}</span>`);
	eleventyConfig.addShortcode("icon", (arg) => `<span class="icon ${arg}"></span>`);

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
