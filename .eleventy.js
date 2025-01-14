const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");
const sass = require("sass");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  // filters are used to modify the data used by a template
  eleventyConfig.addLiquidFilter("getNewestCollectionItemDate", pluginRss.getNewestCollectionItemDate);
  eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
  eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
  eleventyConfig.addLiquidFilter("absoluteUrl", pluginRss.absoluteUrl);
  eleventyConfig.addLiquidFilter("htmlToAbsoluteUrls", pluginRss.convertHtmlToAbsoluteUrls);
  eleventyConfig.addFilter("getSliceOfCollectionItems", function(value) {
    return value.slice(0, Math.min(value.length, 3));
  });
  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  });
  eleventyConfig.addFilter("dateToISOString", function (date) {
    return date.toISOString();
  });

  // copy these files to the output directory
  // if the directories contain any template extensions (such as.html or .md),
  // be sure to add the directory to .eleventyignore
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy(".htaccess");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("asdoc");
  eleventyConfig.addPassthroughCopy("blog-examples");
  eleventyConfig.addPassthroughCopy("tourdejewel");
  eleventyConfig.addPassthroughCopy("blog/downloads");

  // compile sass files into css files
  eleventyConfig.addTemplateFormats("sass");
  eleventyConfig.addExtension("sass", {
    outputFileExtension: "css",
    compileOptions: {
      // don't cache because @import won't work
      cache: false
    },
    compile: async function (inputContent) {
      let result = sass.compileString(inputContent, {
        loadPaths: [
          this.config.dir.includes
        ]
      });
      return async (data) => {
        return new CleanCSS().minify(result.css).styles;
      };
    }
  });

  // minify HTML
  eleventyConfig.addTransform("htmlmin", function (content) {
    if (this.outputPath && this.outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
      });
    }
    return content;
  });
}