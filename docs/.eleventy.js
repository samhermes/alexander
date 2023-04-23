const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (config) {
    config.addPlugin(syntaxHighlight);

    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAnchor);
    config.setLibrary("md", markdownLibrary);

    config.addCollection('base', collection =>
        collection.getFilteredByGlob('_projects/*.md')
    )

    config.addCollection('components', collection =>
        collection.getFilteredByGlob('_projects/*.md')
    )

    config.addCollection('elements', collection =>
        collection.getFilteredByGlob('_projects/*.md')
    )

    config.addCollection('resources', collection =>
        collection.getFilteredByGlob('_projects/*.md')
    )

    config.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });

    config.addPassthroughCopy('css')
    config.addPassthroughCopy('img')
    config.addPassthroughCopy('js')

    return {
        pathPrefix: "/alexander/",
        dir: {
            layouts: "_layouts"
        }
    }
};