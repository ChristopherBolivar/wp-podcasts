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
    hasDescription: {
      type: "boolean",
      default: false
    },
    hasSubTitle: {
      type: "boolean",
      default: true
    },
    hasAuthor: {
      type: "boolean",
      default: true
    },
    hasThumbnail: {
      type: "boolean",
      default: true
    },
    hasDate: {
      type: "boolean",
      default: true
    },
    hasDuration: {
      type: "boolean",
      default: true
    },
    hasButton: {
      type: "boolean",
      default: true
    },
    amountOfEpisodes: {
      type: "number",
      default: 1
    },
    amountOfColumns: {
      type: "number",
      default: 1
    },
    spliceSubTitle: {
      type: "boolean",
      default: false
    },
    subTitleCharacterAmount: {
      type: "number",
      default: 500
    },
    gridClasses: {
      type: "string",
      default: "wp-podcasts-305786-flex wp-podcasts-305786-col-1"
    },
    titleColor: {
      type: "string",
      default: "#000000"
    },
    titleFontSize: {
      type: "number",
      default: 26
    },
    subTitleColor: {
      type: "string",
      default: "#000000"
    },
    subTitleFontSize: {
      type: "number",
      default: 14
    }
  },
  styles: [{
    name: "stacked",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stacked", "wp-podcasts-305786"),
    isDefault: true
  }, {
    name: "split",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Split", "wp-podcasts-305786")
  }, {
    name: "stacked-card",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Stacked Card", "wp-podcasts-305786")
  }, {
    name: "split-card",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Split Card", "wp-podcasts-305786")
  }],
  edit: props => {
    // Pulling Set Attributes and Block Attributes from props
    const {
      attributes: {
        sortEpisodes,
        sortByCategory,
        hasTitle,
        hasDescription,
        hasSubTitle,
        hasAuthor,
        hasThumbnail,
        hasDate,
        hasDuration,
        hasButton,
        amountOfEpisodes,
        amountOfColumns,
        spliceSubTitle,
        subTitleCharacterAmount,
        gridClasses,
        titleColor,
        titleFontSize,
        subTitleColor,
        subTitleFontSize
      },
      className,
      setAttributes
    } = props;
    const camelize = str => {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, i) => {
        return word.toUpperCase();
      }).replace(/\s+/g, " ");
    };
    const [episodes, setEpisodes] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const [allEpisodes, setAllEpisodes] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const [episodeTags, setEpisodeTags] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: "/wp/v2/tags?per_page=100"
      }).then(tags => {
        return tags;
      }).then(res => {
        setEpisodeTags(res);
      }).catch(error => {
        if (error.name === "AbortError") {
          console.log("Request has been aborted");
        }
      });
    }, []);

    //When attributes sorty by category and amount of episodes are changes update episodes
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
      console.log(sortByCategory);
      const useFetch = sortByCategory != "all" ? _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: `/wp/v2/wp-podcasts-305786?per_page=100&tags=${Number(sortByCategory)}`
      }) : _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: "/wp/v2/wp-podcasts-305786?per_page=25"
      });
      useFetch.then(posts => {
        console.log(posts);
        return posts;
      }).then(res => {
        const filteredEpisodes = [...res].filter((episode, i) => i + 1 <= amountOfEpisodes ? episode : null);
        setEpisodes(filteredEpisodes);
        setAllEpisodes(res);
      }).catch(error => {
        if (error.name === "AbortError") {
          console.log("Request has been aborted");
        }
      });
    }, [sortByCategory, amountOfEpisodes]);
    const onChangeFilterByCatergory = category => {
      setAttributes({
        sortByCategory: category
      });
    };
    const onChangeSortEpisodes = sortBy => {
      setAttributes({
        sortEpisodes: sortBy
      });
    };
    const onChangeAmountOfColumns = amount => {
      if (amount > episodes.length) return;
      setAttributes({
        amountOfColumns: amount,
        gridClasses: "wp-podcasts-305786-flex wp-podcasts-305786-col-" + amount
      });
    };
    const onChangeAmountOfEpisodes = amount => {
      if (amount > allEpisodes.length) return;
      setAttributes({
        amountOfEpisodes: amount
      });
    };
    const onChangeToggleTitle = event => {
      setAttributes({
        hasTitle: event
      });
    };
    const onChangeToggleThumbnail = event => {
      setAttributes({
        hasThumbnail: event
      });
    };
    const onChangeToggleDate = event => {
      setAttributes({
        hasDate: event
      });
    };
    const onChangeToggleDuration = event => {
      setAttributes({
        hasDuration: event
      });
    };
    const onChangeToggleButton = event => {
      setAttributes({
        hasButton: event
      });
    };
    const onChangeToggleDescription = event => {
      setAttributes({
        hasDescription: event
      });
    };
    const onChangeSpliceSubTitle = event => {
      setAttributes({
        spliceSubTitle: event
      });
    };
    const onChangeToggleSubTitle = event => {
      setAttributes({
        hasSubTitle: event
      });
    };
    const showSubTitle = subTitle => {
      if (hasSubTitle && spliceSubTitle) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
          tagName: "p",
          value: subTitle[0].slice(0, subTitleCharacterAmount) + "&nbsp;[..]",
          className: "wp-podcasts-305786-episode-subtitle",
          style: {
            color: subTitleColor,
            fontSize: subTitleFontSize
          }
        });
      } else if (hasSubTitle) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
          tagName: "p",
          value: subTitle,
          className: "wp-podcasts-305786-episode-subtitle",
          style: {
            color: subTitleColor,
            fontSize: subTitleFontSize
          }
        });
      }
    };
    const showEpisodeThumbnail = (thumbnail, altTitle) => {
      if (!hasThumbnail) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp-podcasts-305786-episode-thumbnail"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        alt: `${altTitle} thumbnail`,
        src: thumbnail
      }));
    };
    const showEpisodeDate = date => {
      if (!hasDate) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
        icon: "calendar-alt"
      }), " Published:\xA0", date, "\xA0");
    };
    const showDesciption = description => {
      if (!hasDescription) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
        tagName: "p",
        value: description
      });
    };
    const showEpisodeDuration = duration => {
      if (!hasDuration) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "wp-podcasts-305786-episode-episode-duration-span"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
        icon: "clock"
      }), "\xA0Duration:\xA0", duration);
    };
    const showEpisodeButton = date => {
      if (!hasButton) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#",
        className: "wp-podcasts-305786-episode-info-btn"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, "More info"));
    };
    const showEpisodeTitle = topicTitle => {
      if (!hasTitle) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
        tagName: "h1",
        value: topicTitle,
        className: "wp-podcasts-305786-episode-title",
        style: {
          color: titleColor,
          fontSize: titleFontSize
        }
      });
    };
    const showEpisodeAuthor = author => {
      console.log(author.length, hasAuthor);
      if (!hasAuthor || author.length === 0) return;
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "wp-podcasts-305786-author"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
        icon: "admin-users"
      }), "\xA0heyy", author);
    };
    const showEpisodeTags = () => {
      if (!episodeTags) return;
      return episodeTags.map((tag, i) => i != 0 ? {
        value: tag.id,
        label: camelize(tag.name)
      } : {
        value: "all",
        label: "All Categories"
      });
    };
    const showSubTitleSplice = () => {
      if (!spliceSubTitle) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
        step: 1,
        onChange: amount => {
          setAttributes({
            subTitleCharacterAmount: Number(amount)
          });
        },
        value: subTitleCharacterAmount
      });
    };
    const showEpisodes = () => {
      if (episodes.length <= 0) return;
      const episodesCopy = [...episodes];
      const displayEpisodes = episodesCopy.map((topic, i) => {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
          className: `${className} wp-podcasts-305786-episodes-wrapper`
        }, showEpisodeThumbnail(topic.fimg_url, topic.title.rendered), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "wp-podcasts-305786-episode-info"
        }, showEpisodeTitle(topic.title.rendered), showEpisodeAuthor(topic.podcast_data.wp_podcasts_305786_author), showEpisodeDate(new Date(topic.date).toDateString()), showEpisodeDuration(topic.podcast_data.wp_podcasts_305786_duration), showDesciption(topic.podcast_data.wp_podcasts_305786_description), showSubTitle(topic.podcast_data.wp_podcasts_305786_subtitle), showEpisodeButton()));
      });
      return displayEpisodes;
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
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Filter By:"),
      value: sortByCategory,
      onChange: filterBy => {
        console.log(filterBy);
        onChangeFilterByCatergory(filterBy);
      },
      options: showEpisodeTags()
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Number of Episodes"),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Filter by number if episodes you like to display"),
      value: amountOfEpisodes,
      min: 1,
      max: allEpisodes.length,
      onChange: amount => onChangeAmountOfEpisodes(amount)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Number of Columns"),
      allowReset: true,
      value: amountOfColumns,
      min: 1,
      onChange: amount => onChangeAmountOfColumns(amount),
      max: 12
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Thumbnail"),
      help: hasTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Thumbnail") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Thumbnail"),
      checked: hasThumbnail,
      onChange: e => onChangeToggleThumbnail(e)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Title"),
      help: hasTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Title") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Title"),
      checked: hasTitle,
      onChange: e => onChangeToggleTitle(e)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Description"),
      help: hasDescription ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Description") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Description"),
      checked: hasDescription,
      onChange: e => onChangeToggleDescription(e)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Subtitle"),
      help: hasSubTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Sub Title") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Sub Title"),
      checked: hasSubTitle,
      onChange: e => onChangeToggleSubTitle(e)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Publish Date"),
      help: hasDate ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Date") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Date"),
      checked: hasDate,
      onChange: e => onChangeToggleDate(e)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Duration"),
      help: hasDuration ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Duration") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Duration"),
      checked: hasDuration,
      onChange: e => onChangeToggleDuration(e)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Button"),
      help: hasButton ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Button") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Button"),
      checked: hasButton,
      onChange: e => onChangeToggleButton(e)
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Settings", "wp-podcasts-305786"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      value: titleColor,
      onChange: color => setAttributes({
        titleColor: color
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      fontSizes: [{
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Small"),
        slug: "small",
        size: 12
      }, {
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Medium"),
        slug: "medium",
        size: 26
      }, {
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Big"),
        slug: "big",
        size: 36
      }],
      value: titleFontSize,
      fallbackFontSize: 26,
      onChange: newFontSize => setAttributes({
        titleFontSize: newFontSize
      }),
      withSlider: true
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subtitle Settings", "wp-podcasts-305786"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Limit Subtitle Character Count"),
      help: spliceSubTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Don't Splice Subtitle") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Splice Subtitle"),
      checked: spliceSubTitle,
      onChange: e => onChangeSpliceSubTitle(e)
    }), showSubTitleSplice(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      value: subTitleColor,
      onChange: color => setAttributes({
        subTitleColor: color
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      fontSizes: [{
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Small"),
        slug: "small",
        size: 14
      }, {
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Medium"),
        slug: "medium",
        size: 18
      }, {
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Big"),
        slug: "big",
        size: 24
      }],
      value: subTitleFontSize,
      fallbackFontSize: 14,
      max: 36,
      onChange: newFontSize => setAttributes({
        subTitleFontSize: newFontSize
      }),
      withSlider: true
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Publish Date Settings", "wp-podcasts-305786"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      value: subTitleColor,
      onChange: color => setAttributes({
        subTitleColor: color
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      fontSizes: [{
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Small"),
        slug: "small",
        size: 14
      }, {
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Medium"),
        slug: "medium",
        size: 18
      }, {
        name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Big"),
        slug: "big",
        size: 24
      }],
      value: subTitleFontSize,
      fallbackFontSize: 14,
      max: 36,
      onChange: newFontSize => setAttributes({
        subTitleFontSize: newFontSize
      }),
      withSlider: true
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Settings", "wp-podcasts-305786"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, "yellow"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: `wp-podcasts-305786-block wp-podcasts-305786-episodes ${gridClasses}`
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