/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/01-Episodes/index.js":
/*!**********************************!*\
  !*** ./src/01-Episodes/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)("wp-podcasts-305786/episodes", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Episodes Archive", "wp-podcasts-305786"),
  icon: "format-video",
  category: "wp_podcasts_305786_blocks",
  attributes: {
    allEpisodes: {
      type: "array",
      default: []
    },
    episodes: {
      type: "array",
      default: []
    },
    episodeTags: {
      type: "array",
      default: []
    },
    sortEpisodes: {
      type: "string",
      default: "asc"
    },
    sortByCategory: {
      type: "string",
      default: "all"
    },
    hasTitle: {
      type: "boolean",
      default: true
    },
    hasSubTitle: {
      type: "boolean",
      default: true
    },
    amountOfEpisodes: {
      type: "number",
      default: 1
    }
  },
  styles: [{
    name: "stacked",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stacked", "wp-podcasts-305786"),
    isDefault: true
  }, {
    name: "split",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Split", "wp-podcasts-305786")
  }],
  edit: props => {
    // Pulling Set Attributes and Block Attributes from props
    const {
      attributes: {
        episodes,
        sortEpisodes,
        episodeTags,
        sortByCategory,
        allEpisodes,
        hasTitle,
        hasSubTitle,
        amountOfEpisodes
      },
      className,
      setAttributes
    } = props;
    const camelize = str => {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, i) => {
        return word.toUpperCase();
      }).replace(/\s+/g, " ");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: "/wp/v2/tags?per_page=100"
      }).then(tags => {
        return tags;
      }).then(results => {
        setAttributes({
          episodeTags: results
        });
      });
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: "/wp/v2/wp-podcasts-305786"
      }).then(posts => {
        return posts;
      }).then(res => {
        setAttributes({
          allEpisodes: res
        });
        setAttributes({
          episodes: res
        });
        setAttributes({
          amountOfEpisodes: res.length
        });
      }).catch(error => {
        // If the browser doesn't support AbortController then the code below will never log.
        // However, in most cases this should be fine as it can be considered to be a progressive enhancement.
        if (error.name === "AbortError") {
          console.log("Request has been aborted");
        }
      });
    }, []);
    let onChangeFilterByCatergory = category => {
      let episodesCopy = [];
      setAttributes({
        sortByCategory: category
      });
      if (category != "all") {
        episodesCopy = [...allEpisodes].filter((episode, i) => {
          if (episode.tags.includes(Number(category))) {
            return episode;
          }
        });
      }
      if (category === "all") {
        episodesCopy = [...allEpisodes];
        // console.log(episodes.length, "here");
        // setAttributes({ episodes: [...allEpisodes] });
        // setAttributes({ amountOfEpisodes:  [...allEpisodes].length });
      }

      setAttributes({
        episodes: episodesCopy
      });
      setAttributes({
        amountOfEpisodes: episodesCopy.length
      });
    };
    let onChangeSortEpisodes = sortBy => {
      let episodesCopy = [...episodes];
      if (sortBy === "asc") {
        episodesCopy.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      }
      if (sortBy === "desc") {
        episodesCopy = [...allEpisodes].reverse();
      }
      setAttributes({
        episodes: episodesCopy
      });
      setAttributes({
        sortEpisodes: sortBy
      });
      setAttributes({
        amountOfEpisodes: episodesCopy.length
      });
    };
    let onChangeAmountOfEpisodes = amount => {
      let episodesCopy = [...episodes];
      let allEpisodesCopy = [...allEpisodes];
      setAttributes({
        amountOfEpisodes: amount
      });
      if (sortEpisodes != "asc") {
        episodesCopy = episodesCopy.reverse();
      }
      if (sortByCategory != "all") {
        episodesCopy = allEpisodesCopy.filter((episode, i) => {
          if (episode.tags.includes(Number(sortByCategory))) {
            return episode;
          }
        });
        console.log(episodesCopy, 'step1');
        episodesCopy = allEpisodesCopy.filter((episode, i) => {
          i + 1;
          if (i <= amount) {
            return episode;
          }
        });
        console.log(episodesCopy, 'step2');
      }
      if (amount === allEpisodesCopy.length) {
        setAttributes({
          episodes: allEpisodesCopy
        });
      } else {
        episodesCopy = allEpisodesCopy.filter((episode, i) => {
          if (i + 1 <= amount) {
            return episode;
          }
        });
        setAttributes({
          amountOfEpisodes: episodesCopy.length
        });
        setAttributes({
          episodes: episodesCopy
        });
      }
      setAttributes({
        amountOfEpisodes: episodesCopy.length
      });
    };
    let onChangeToggleTitle = event => {
      setAttributes({
        hasTitle: event
      });
    };
    let onChangeToggleSubTitle = event => {
      setAttributes({
        hasSubTitle: event
      });
    };
    let showSubTitle = subTitle => {
      if (hasSubTitle) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
          tagName: "p",
          value: subTitle,
          className: "wp-podcasts-305786-episode-subtitle"
        });
      }
    };
    let showEpisodeTitle = topicTitle => {
      if (hasTitle) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
          className: "wp-podcasts-305786-episode-title"
        }, topicTitle);
      }
    };
    let showEpisodeTags = () => {
      if (episodeTags) {
        return episodeTags.map((tag, i) => {
          if (i === 0) {
            return {
              value: "all",
              label: "All Categories"
            };
          } else {
            return {
              value: tag.id,
              label: camelize(tag.name)
            };
          }
        });
      }
    };
    let showEpisodes = () => {
      let episodesCopy = [...episodes];
      let allEpisodesCopy = [...allEpisodes];
      if (sortByCategory != "all" && episodesCopy.length != 1) {
        episodesCopy = allEpisodesCopy.filter((episode, i) => {
          if (episode.tags.includes(Number(sortByCategory))) {
            return episode;
          }
        });
        console.log(episodesCopy, sortByCategory, 'here?');
      }
      if (sortEpisodes === "asc") {
        episodesCopy = episodesCopy.sort(function (a, b) {
          return new Date(b.date) + new Date(a.date);
        });
        console.log('ascc', episodesCopy);
      } else {
        episodesCopy = episodesCopy.reverse();
      }
      setAttributes({
        amountOfEpisodes: episodesCopy.length
      });
      console.log(episodesCopy, sortEpisodes, 'fin');
      return episodesCopy.map((topic, i) => {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
          className: `${className} wp-podcasts-305786-episodes-wrapper`
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "wp-podcasts-305786-episode-thumbnail"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: topic.fimg_url
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "wp-podcasts-305786-episode-info"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "wp-podcasts-305786-episode-thumbnail-inner"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: topic.fimg_url
        })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "wp-podcasts-305786-episode-info-inner"
        }, showEpisodeTitle(topic.title.rendered), showSubTitle(topic.podcast_data.wp_podcasts_305786_subtitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
          className: "wp-podcasts-305786-episode-episode-duration"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "wp-podcasts-305786-episode-episode-duration-span"
        }, "Duration:"), " ", topic.podcast_data.wp_podcasts_305786_duration), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: "",
          className: "wp-podcasts-305786-episode-info-btn"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          className: "wp-block-button wp-element-button"
        }, "More info")))));
      });
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("General Settings", "wp-podcasts-305786")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sort By:"),
      value: sortEpisodes,
      onChange: sortBy => {
        onChangeSortEpisodes(sortBy);
      },
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sort by", "wp-podcasts-305786"),
        disabled: true
      }, {
        value: "asc",
        label: "Ascending"
      }, {
        value: "desc",
        label: "Descending"
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Filter By:"),
      value: sortByCategory,
      onChange: filterBy => {
        onChangeFilterByCatergory(filterBy);
      },
      options: showEpisodeTags()
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Title"),
      help: hasTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Title") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Title"),
      checked: hasTitle,
      onChange: e => onChangeToggleTitle(e)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Subtitle"),
      help: hasSubTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Sub Title") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Sub Title"),
      checked: hasSubTitle,
      onChange: e => onChangeToggleSubTitle(e)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: "Columns",
      value: amountOfEpisodes,
      min: 1,
      max: allEpisodes.length,
      onChange: amount => onChangeAmountOfEpisodes(amount)
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Settings", "wp-podcasts-305786")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Thumbnail Settings", "wp-podcasts-305786")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, "yellow")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Author Settings", "wp-podcasts-305786")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, "yellow")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Share Settings", "wp-podcasts-305786")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, "yellow")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Share Settings", "wp-podcasts-305786")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, "yellow")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Settings", "wp-podcasts-305786")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, "yellow"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: `wp-podcasts-305786-block wp-podcasts-305786-episodes`
    }, showEpisodes())];
  },
  save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wp Podcasts 305786 – hello from the editor!', 'wp-podcasts-305786'));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _01_Episodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./01-Episodes */ "./src/01-Episodes/index.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/wp-podcasts-305786', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Wp Podcasts 305786 – hello from the saved content!', 'wp-podcasts-305786'));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwp_podcasts_305786"] = self["webpackChunkwp_podcasts_305786"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map