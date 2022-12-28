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








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)("wp-podcasts-305786/episodes", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Episodes Archive", "wp-podcasts-305786"),
  icon: "format-video",
  category: "wp_podcasts_305786_blocks",
  attributes: {
    episodeSettings: {
      type: "object",
      default: {
        sort: "newest",
        order: "asc",
        category: "all",
        amount: 1,
        columns: 1,
        totalPages: 1,
        totalEpisodes: 1,
        classStyle: "wp-podcasts-305786-flex wp-podcasts-305786-col-1"
      }
    },
    sortEpisodes: {
      type: "string",
      default: "asc"
    },
    sortByCategory: {
      type: "string",
      default: "all"
    },
    episodeTitleSettings: {
      type: "object",
      default: {
        hasTitle: true,
        titleColor: "#000000",
        titleFontSize: 16
      }
    },
    episodeSubTitleSettings: {
      type: "object",
      default: {
        hasSubTitle: false,
        subTitleColor: "#000000",
        subTitleFontSize: 14,
        spliceSubTitle: false,
        subTitleCharacterAmount: 500
      }
    },
    episodeDescriptionSettings: {
      type: "object",
      default: {
        hasDescription: false,
        descriptionColor: "#000000",
        descriptionFontSize: 14,
        spliceDescription: false,
        descriptionCharacterAmount: 500
      }
    },
    episodeAuthorSettings: {
      type: "object",
      default: {
        hasAuthor: true,
        authorColor: "#000000",
        authorFontSize: 14
      }
    },
    episodeThumbnailSettings: {
      type: "object",
      default: {
        hasThumbnail: true
      }
    },
    episodeDateSettings: {
      type: "object",
      default: {
        hasDate: true,
        publishDateColor: "#000000",
        publishDateFontSize: 14,
        hasCalendarIcon: true,
        displayPublishDateInline: false
      }
    },
    episodeDurationSettings: {
      type: "object",
      default: {
        hasDuration: true,
        durationColor: "#000000",
        durationFontSize: 14,
        hasDurationIcon: true,
        displayDurationInline: false
      }
    },
    episodeButtonSettings: {
      type: "object",
      default: {
        hasButton: true,
        buttonText: "More Info",
        buttonColor: "#000000",
        buttonFontSize: 14,
        hasButtonIcon: true,
        displayButtonInline: false,
        hasBorder: false,
        borderColor: "#cccccc",
        borderRadius: 0,
        borderStyle: "solid",
        borderWidth: 1,
        buttonPadding: 10
      }
    },
    amountOfEpisodes: {
      type: "number",
      default: 1
    },
    amountOfColumns: {
      type: "number",
      default: 1
    },
    gridClasses: {
      type: "string",
      default: "wp-podcasts-305786-flex wp-podcasts-305786-col-1"
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
        amountOfEpisodes,
        amountOfColumns,
        gridClasses,
        episodeTitleSettings,
        episodeDescriptionSettings,
        episodeSubTitleSettings,
        episodeAuthorSettings,
        episodeThumbnailSettings,
        episodeDateSettings,
        episodeDurationSettings,
        episodeButtonSettings,
        episodeButtonBorderSettings,
        episodeSettings
      },
      className,
      setAttributes
    } = props;
    const camelize = str => {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, i) => {
        return word.toUpperCase();
      }).replace(/\s+/g, " ");
    };
    const fontSizesBody = [{
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
    }];
    const fontSizesHeadings = [{
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Small"),
      slug: "small",
      size: 16
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Medium"),
      slug: "medium",
      size: 26
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Big"),
      slug: "big",
      size: 36
    }];
    const [episodes, setEpisodes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [allEpisodes, setAllEpisodes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [episodeTags, setEpisodeTags] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: "/wp/v2/wp-podcasts-305786/?per_page=25&page=1",
        parse: false
      }).then(posts => {
        return posts;
      }).then(res => {
        console.log(res.headers.get('X-WP-TotalPages'), 'yellow');
        setAttributes({
          episodeSettings: {
            ...episodeSettings,
            totalPages: res.headers.get('X-WP-TotalPages'),
            totalEpisodes: res.headers.get('X-WP-Total')
          }
        });
      }).catch(error => {
        if (error.name === "AbortError") {
          console.log("Request has been aborted");
        }
      });
    }, []);

    // useEffect(() => {
    //   const useFetch =
    //     sortByCategory != "all"
    //       ? apiFetch({
    //           path: `/wp/v2/wp-podcasts-305786?per_page=100&tags=${Number(
    //             sortByCategory
    //           )}`,
    //       })
    //       : apiFetch({ path: "/wp/v2/wp-podcasts-305786?per_page=25" });

    //   useFetch
    //     .then((posts) => {

    //       return posts;

    //     })
    //     .then((res) => {

    //       let filteredEpisodes = [...res];
    //       console.log(sortEpisodes, 'sortEpisodes')

    //       if (sortEpisodes === "asc") {
    //         filteredEpisodes = [...res].sort((a, b) => {

    //           return a.id - b.id;
    //         });
    //       } else if (sortEpisodes === "desc") {
    //         filteredEpisodes = [...res].sort((a, b) => {
    //           return b.id- a.id;
    //         });

    //       } 

    //       console.log(filteredEpisodes, sortEpisodes)

    //       filteredEpisodes = [...filteredEpisodes].filter((episode, i) =>
    //         i + 1 <= amountOfEpisodes ? episode : null
    //       );

    //       setEpisodes(filteredEpisodes);
    //       setAllEpisodes(res);
    //     })
    //     .catch((error) => {
    //       if (error.name === "AbortError") {
    //         console.log("Request has been aborted");
    //       }
    //     });
    // }, [sortByCategory, amountOfEpisodes, sortEpisodes]);

    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      console.log(episodeSettings.totalPages, episodeSettings.amount, 'episodeSettings');
      const episodeQuery = episodeSettings.sort === "newest" ? _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: `/wp/v2/wp-podcasts-305786?per_page=25`
      }) : _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: `/wp/v2/wp-podcasts-305786?per_page=25&page=${episodeSettings.totalPages}`
      });
      let fetchedEpisodes = [];
      episodeQuery.then(posts => {
        console.log(posts);
        return posts;
      }).then(res => {
        if (episodeSettings.order === "asc") {
          fetchedEpisodes = [...res].sort((a, b) => {
            return a.id - b.id;
          });
        } else if (episodeSettings.order === "desc") {
          fetchedEpisodes = [...res].sort((a, b) => {
            return b.id - a.id;
          });
        }
        fetchedEpisodes = [...fetchedEpisodes].filter((episode, i) => i + 1 <= episodeSettings.amount ? episode : null);
        setEpisodes(fetchedEpisodes);
        setAllEpisodes(res);
        console.log(res, 'fetchedEpisodes ', episodeSettings.sort, episodeSettings.order);
      }).catch(error => {
        if (error.name === "AbortError") {
          console.log("Request has been aborted");
        }
      });
    }, [episodeSettings]);
    const onChangeFilterByCatergory = category => {
      setAttributes({
        sortByCategory: category
      });
      setAttributes({
        episodeSettings: {
          ...episodeSettings,
          category: category
        }
      });
    };
    const onChangeAmountOfColumns = amount => {
      if (amount > episodes.length || amount >= episodeSettings.totalEpisodes) return;
      setAttributes({
        amountOfColumns: amount,
        gridClasses: "wp-podcasts-305786-flex wp-podcasts-305786-col-" + amount
      });
      setAttributes({
        episodeSettings: {
          ...episodeSettings,
          columns: amount,
          classStyle: "wp-podcasts-305786-flex wp-podcasts-305786-col-" + amount
        }
      });
    };
    const onChangeAmountOfEpisodes = amount => {
      if (amount > 25 || amount >= episodeSettings.totalEpisodes) return;
      setAttributes({
        amountOfEpisodes: amount
      });
      setAttributes({
        episodeSettings: {
          ...episodeSettings,
          amount: amount
        }
      });
    };
    const onChangeToggleThumbnail = event => {
      setAttributes({
        episodeThumbnailSettings: {
          hasThumbnail: event
        }
      });
    };
    const onChangeToggleDescription = event => {
      setAttributes({
        episodeDescriptionSettings: {
          hasDescription: event
        }
      });
    };
    const onChangeToggleSubTitle = event => {
      setAttributes({
        episodeSubTitleSettings: {
          hasSubTitle: event
        }
      });
    };
    const showSubTitle = subTitle => {
      if (episodeSubTitleSettings.hasSubTitle && episodeSubTitleSettings.spliceSubTitle) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
          tagName: "p",
          value: subTitle[0].slice(0, episodeSubTitleSettings.subTitleCharacterAmount) + "&nbsp;[..]",
          className: "wp-podcasts-305786-episode-subtitle",
          style: {
            color: episodeSubTitleSettings.subTitleColor,
            fontSize: episodeSubTitleSettings.subTitleFontSize
          }
        });
      } else if (episodeSubTitleSettings.hasSubTitle) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
          tagName: "p",
          value: subTitle,
          className: "wp-podcasts-305786-episode-subtitle",
          style: {
            color: episodeSubTitleSettings.subTitleColor,
            fontSize: episodeSubTitleSettings.subTitleFontSize
          }
        });
      }
    };
    const showEpisodeThumbnail = (thumbnail, altTitle) => {
      if (!episodeThumbnailSettings.hasThumbnail) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp-podcasts-305786-episode-thumbnail"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        alt: `${altTitle} thumbnail`,
        src: thumbnail
      }));
    };
    const showEpisodeDate = date => {
      if (!episodeDateSettings.hasDate) return;
      const publishDateClass = episodeDateSettings.displayPublishDateInline ? "wp-podcasts-inline" : "";
      const calendarIcon = episodeDateSettings.hasCalendarIcon ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
        icon: "calendar-alt",
        style: {
          paddingRight: "5px"
        }
      }) : "";
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: `${publishDateClass}`,
        style: {
          color: episodeDateSettings.publishDateColor,
          fontSize: episodeDateSettings.publishDateFontSize
        }
      }, calendarIcon, "Published:\xA0", date, "\xA0");
    };
    const showEpisodeDesciption = description => {
      if (!episodeDescriptionSettings.hasDescription) return;
      const parser = new DOMParser();
      const doc = parser.parseFromString(description, "text/html");
      const descriptionText = episodeDescriptionSettings.spliceDescription ? doc.body.innerText.slice(0, episodeDescriptionSettings.descriptionCharacterAmount) + "&nbsp;[..]" : doc.body.innerText;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          fontSize: episodeDescriptionSettings.descriptionFontSize,
          color: episodeDescriptionSettings.descriptionColor
        },
        dangerouslySetInnerHTML: {
          __html: descriptionText
        }
      });
    };
    const showEpisodeDuration = duration => {
      if (!episodeDurationSettings.hasDuration) return;
      const durationClass = episodeDurationSettings.displayDurationInline ? "wp-podcasts-inline" : "";
      const durationIcon = episodeDurationSettings.hasDurationIcon ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
        icon: "clock",
        style: {
          paddingRight: "5px"
        }
      }) : "";
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: `wp-podcasts-305786-episode-episode-duration-span ${durationClass}`,
        style: {
          color: episodeDurationSettings.durationColor,
          fontSize: episodeDurationSettings.durationFontSize
        }
      }, durationIcon, "Duration:\xA0", duration);
    };
    const showEpisodeButton = () => {
      if (!episodeButtonSettings.hasButton) return;
      const buttonIcon = episodeButtonSettings.hasButtonIcon ? "wp-podcasts-305786-episode-button-icon" : "";
      const buttonInlineBlock = episodeButtonSettings.displayButtonInline ? "wp-podcasts-inline" : "wp-podcasts-block";
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#",
        className: `${buttonIcon} ${buttonInlineBlock} wp-podcasts-305786-episode-info-btn`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
        tagName: "button",
        value: episodeButtonSettings.buttonText,
        onClick: showBlockControls(),
        className: `wp-podcasts-305786-episode-button`,
        style: {
          fontSize: episodeButtonSettings.buttonFontSize,
          color: episodeButtonSettings.buttonColor
        }
      }));
    };
    const showEpisodeTitle = topicTitle => {
      if (!episodeTitleSettings.hasTitle) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
        tagName: "h1",
        value: topicTitle,
        className: "wp-podcasts-305786-episode-title",
        style: {
          color: episodeTitleSettings.titleColor,
          fontSize: episodeTitleSettings.titleFontSize
        }
      }));
    };
    const showEpisodeAuthor = author => {
      if (!episodeAuthorSettings.hasAuthor || author.length <= 0) return;
      const authorIcon = episodeAuthorSettings.hasAuthorIcon ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
        icon: "admin-users",
        style: {
          paddingRight: "5px"
        }
      }) : "";
      const authorInline = episodeAuthorSettings.displayAuthorInline ? "wp-podcasts-inline" : "wp-podcasts-block";
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        style: {
          fontSize: episodeAuthorSettings.authorFontSize,
          color: episodeAuthorSettings.authorColor
        },
        className: `wp-podcasts-305786-author ${authorInline}`
      }, authorIcon, author);
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
    const showDescriptionSplice = () => {
      if (!episodeDescriptionSettings.spliceDescription) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
        step: 1,
        onChange: amount => {
          setAttributes({
            episodeDescriptionSettings: {
              ...episodeDescriptionSettings,
              descriptionCharacterAmount: amount
            }
          });
        },
        value: episodeDescriptionSettings.descriptionCharacterAmount
      });
    };
    const showSubTitleSplice = () => {
      if (!episodeSubTitleSettings.spliceSubTitle) return;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
        step: 1,
        onChange: amount => {
          setAttributes({
            episodeSubTitleSettings: {
              ...episodeSubTitleSettings,
              subTitleCharacterAmount: amount
            }
          });
        },
        value: episodeSubTitleSettings.subTitleCharacterAmount
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
        }, showEpisodeTitle(topic.title.rendered), showEpisodeAuthor(topic.podcast_data.wp_podcasts_305786_author), showEpisodeDate(new Date(topic.date).toDateString()), showEpisodeDuration(topic.podcast_data.wp_podcasts_305786_duration), showEpisodeDesciption(topic.podcast_data.wp_podcasts_305786_description), showSubTitle(topic.podcast_data.wp_podcasts_305786_subtitle), showEpisodeButton()));
      });
      return displayEpisodes;
    };
    const showBlockControls = () => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
        icon: "edit",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit Podcast", "wp-podcasts-305786"),
        onClick: () => {}
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
        icon: "trash",
        title: "Delete Podcast"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
        icon: "plus",
        title: "Add Podcast"
      })));
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
      className: "wp-podcasts-305786-panel",
      header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("WP Podcast Settings", "wp-podcasts-305786")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("General Settings", "wp-podcasts-305786"),
      icon: "admin-generic"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fetch By:"),
      value: episodeSettings.sort,
      onChange: sortBy => {
        setAttributes({
          episodeSettings: {
            ...episodeSettings,
            sort: sortBy
          }
        });
      },
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fetch by", "wp-podcasts-305786"),
        disabled: true
      }, {
        value: "newest",
        label: "Newest"
      }, {
        value: "oldest",
        label: "Oldests"
      }]
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sort By:"),
      value: episodeSettings.order,
      onChange: sortBy => {
        setAttributes({
          episodeSettings: {
            ...episodeSettings,
            order: sortBy
          }
        });
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
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Filter By:"),
      value: sortByCategory,
      onChange: filterBy => {
        onChangeFilterByCatergory(filterBy);
      },
      options: showEpisodeTags()
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Number of Episodes"),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Filter by number if episodes you like to display"),
      value: amountOfEpisodes,
      min: 1,
      max: 25,
      onChange: amount => onChangeAmountOfEpisodes(amount)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Number of Columns"),
      allowReset: true,
      value: amountOfColumns,
      min: 1,
      onChange: amount => onChangeAmountOfColumns(amount),
      max: 6
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Thumbnail"),
      help: episodeThumbnailSettings.hasThumbnail ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Thumbnail") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Thumbnail"),
      checked: episodeThumbnailSettings.hasThumbnail,
      onChange: e => onChangeToggleThumbnail(e)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Title"),
      help: episodeTitleSettings.hasTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Title") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Title"),
      checked: episodeTitleSettings.hasTitle,
      onChange: e => setAttributes({
        episodeTitleSettings: {
          ...episodeTitleSettings,
          hasTitle: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Description"),
      help: episodeDescriptionSettings.hasDescription ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Description") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Description"),
      checked: episodeDescriptionSettings.hasDescription,
      onChange: e => onChangeToggleDescription(e)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Subtitle"),
      help: episodeSubTitleSettings.hasSubTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Sub Title") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Sub Title"),
      checked: episodeSubTitleSettings.hasSubTitle,
      onChange: e => onChangeToggleSubTitle(e)
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Author"),
      help: episodeAuthorSettings.hasAuthor ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Author") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Author"),
      checked: episodeAuthorSettings.hasAuthor,
      onChange: e => setAttributes({
        episodeAuthorSettings: {
          ...episodeAuthorSettings,
          hasAuthor: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Publish Date"),
      help: episodeDateSettings.hasDate ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Date") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Date"),
      checked: episodeDateSettings.hasDate,
      onChange: e => setAttributes({
        episodeDateSettings: {
          ...episodeDateSettings,
          hasDate: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Duration"),
      help: episodeDurationSettings.hasDuration ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Duration") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Duration"),
      checked: episodeDurationSettings.hasDuration,
      onChange: e => setAttributes({
        episodeDurationSettings: {
          ...episodeDurationSettings,
          hasDuration: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Button"),
      help: episodeButtonSettings.hasButton ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Button") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Button"),
      checked: episodeButtonSettings.hasButton,
      onChange: e => setAttributes({
        episodeButtonSettings: {
          ...episodeButtonSettings,
          hasButton: e
        }
      })
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Settings", "wp-podcasts-305786"),
      initialOpen: false,
      icon: "heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h2",
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("ChangeFont Color", "wp-podcasts-305786")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      value: episodeTitleSettings.titleColor,
      onChange: color => setAttributes({
        episodeTitleSettings: {
          ...episodeTitleSettings,
          titleColor: color
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h2",
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Change Font Size", "wp-podcasts-305786")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      fontSizes: fontSizesHeadings,
      value: episodeTitleSettings.titleFontSize,
      fallbackFontSize: 26,
      onChange: newFontSize => setAttributes({
        episodeTitleSettings: {
          ...episodeTitleSettings,
          titleFontSize: newFontSize
        }
      }),
      withSlider: true
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Description Settings"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Splice Description"),
      help: episodeDescriptionSettings.spliceDescription ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Splice") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Splice"),
      checked: episodeDescriptionSettings.spliceDescription,
      onChange: e => setAttributes({
        episodeDescriptionSettings: {
          ...episodeDescriptionSettings,
          spliceDescription: e
        }
      })
    }))), showDescriptionSplice(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h2",
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Change Font Color", "wp-podcasts-305786")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      value: episodeDescriptionSettings.descriptionColor,
      onChange: color => setAttributes({
        episodeDescriptionSettings: {
          ...episodeDescriptionSettings,
          descriptionColor: color
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h2",
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Change Font Size", "wp-podcasts-305786")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      fontSizes: fontSizesBody,
      value: episodeDescriptionSettings.descriptionFontSize,
      fallbackFontSize: 16,
      onChange: newFontSize => setAttributes({
        episodeDescriptionSettings: {
          ...episodeDescriptionSettings,
          descriptionFontSize: newFontSize
        }
      }),
      withSlider: true
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subtitle Settings", "wp-podcasts-305786"),
      initialOpen: false,
      icon: "text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Limit Subtitle Character Count"),
      help: episodeSubTitleSettings.spliceSubTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Don't Splice Subtitle") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Splice Subtitle"),
      checked: episodeSubTitleSettings.spliceSubTitle,
      onChange: e => {
        setAttributes({
          episodeSubTitleSettings: {
            ...episodeSubTitleSettings,
            spliceSubTitle: e
          }
        });
      }
    }))), showSubTitleSplice(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      value: episodeSubTitleSettings.subTitleColor,
      onChange: color => setAttributes({
        episodeSubTitleSettings: {
          ...episodeSubTitleSettings,
          subTitleColor: color
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      fontSizes: fontSizesBody,
      value: episodeSubTitleSettings.subTitleFontSize,
      fallbackFontSize: 14,
      max: 36,
      onChange: newFontSize => setAttributes({
        episodeSubTitleSettings: {
          ...episodeSubTitleSettings,
          subTitleFontSize: newFontSize
        }
      }),
      withSlider: true
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Author Settings", "wp-podcasts-305786"),
      initialOpen: false,
      icon: "users"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Author Icon"),
      help: episodeAuthorSettings.hasAuthorIcon ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Author Icon") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Author Icon"),
      checked: episodeAuthorSettings.hasAuthorIcon,
      onChange: e => setAttributes({
        episodeAuthorSettings: {
          ...episodeAuthorSettings,
          hasAuthorIcon: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Inline"),
      help: episodeAuthorSettings.displayInline ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Inline") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Block"),
      checked: episodeAuthorSettings.displayInline,
      onChange: e => setAttributes({
        episodeAuthorSettings: {
          ...episodeAuthorSettings,
          displayInline: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      value: episodeAuthorSettings.authorColor,
      onChange: color => setAttributes({
        episodeAuthorSettings: {
          ...episodeAuthorSettings,
          authorColor: color
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      fontSizes: fontSizesBody,
      value: episodeAuthorSettings.authorFontSize,
      fallbackFontSize: 14,
      max: 36,
      onChange: newFontSize => setAttributes({
        episodeAuthorSettings: {
          ...episodeAuthorSettings,
          authorFontSize: newFontSize
        }
      }),
      withSlider: true
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Publish Date Settings", "wp-podcasts-305786"),
      initialOpen: false,
      icon: "calendar-alt"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Calendar Icon"),
      help: episodeDateSettings.hasCalendarIcon ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Calendar Icon") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Calendar Icon"),
      checked: episodeDateSettings.hasCalendarIcon,
      onChange: e => setAttributes({
        episodeDateSettings: {
          ...episodeDateSettings,
          hasCalendarIcon: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Inline"),
      help: episodeDateSettings.displayPublishDateInline ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Inline") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Block"),
      checked: episodeDateSettings.displayPublishDateInline,
      onChange: e => setAttributes({
        episodeDateSettings: {
          ...episodeDateSettings,
          displayPublishDateInline: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h3",
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Change Font Color", "wp-podcasts-305786")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      value: episodeDateSettings.publishDateColor,
      onChange: color => setAttributes({
        episodeDateSettings: {
          ...episodeDateSettings,
          publishDateColor: color
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h3",
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Change Font Size", "wp-podcasts-305786")
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      fontSizes: fontSizesBody,
      value: episodeDateSettings.publishDateFontSize,
      fallbackFontSize: 14,
      max: 36,
      onChange: newFontSize => setAttributes({
        episodeDateSettings: {
          ...episodeDateSettings,
          publishDateFontSize: newFontSize
        }
      }),
      withSlider: true
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Duration Settings", "wp-podcasts-305786"),
      initialOpen: false,
      icon: "clock"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Duration Icon"),
      help: episodeDurationSettings.hasDurationIcon ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Icon") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Icon"),
      checked: episodeDurationSettings.hasDurationIcon,
      onChange: e => setAttributes({
        episodeDurationSettings: {
          ...episodeDurationSettings,
          hasDurationIcon: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Inline"),
      help: episodeDurationSettings.displayDurationInline ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Inline") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Block"),
      checked: episodeDurationSettings.displayDurationInline,
      onChange: e => setAttributes({
        episodeDurationSettings: {
          ...episodeDurationSettings,
          displayDurationInline: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      value: episodeDurationSettings.durationColor,
      onChange: color => setAttributes({
        episodeDurationSettings: {
          ...episodeDurationSettings,
          durationColor: color
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      fontSizes: fontSizesBody,
      value: episodeDurationSettings.durationFontSize,
      fallbackFontSize: 14,
      max: 36,
      onChange: newFontSize => setAttributes({
        episodeDurationSettings: {
          ...episodeDurationSettings,
          durationFontSize: newFontSize
        }
      }),
      withSlider: true
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Settings", "wp-podcasts-305786"),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-base-control__field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Button Icon"),
      help: episodeButtonSettings.hasButtonIcon ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Has Icon") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No Icon"),
      checked: episodeButtonSettings.hasButtonIcon,
      onChange: e => setAttributes({
        episodeButtonSettings: {
          ...episodeButtonSettings,
          hasButtonIcon: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Inline"),
      help: episodeButtonSettings.displayButtonInline ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Inline") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Block"),
      checked: episodeButtonSettings.displayButtonInline,
      onChange: e => setAttributes({
        episodeButtonSettings: {
          ...episodeButtonSettings,
          displayButtonInline: e
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalInputControl, {
      label: "Button Text",
      value: episodeButtonSettings.buttonText,
      onChange: nextValue => {
        if (nextValue.split("") <= 0) nextValue = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("More Info");
        setAttributes({
          episodeButtonSettings: {
            ...episodeButtonSettings,
            buttonText: nextValue
          }
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h3",
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Font Color", "wp-podcasts-305786")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      value: episodeButtonSettings.buttonColor,
      onChange: color => setAttributes({
        episodeButtonSettings: {
          ...episodeButtonSettings,
          buttonColor: color
        }
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label wp-podcasts-305786-labels"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h3",
      value: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Font Size", "wp-podcasts-305786")
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      fontSizes: fontSizesBody,
      value: episodeButtonSettings.buttonFontSize,
      fallbackFontSize: 14,
      max: 36,
      onChange: newFontSize => setAttributes({
        episodeButtonSettings: {
          ...episodeButtonSettings,
          buttonFontSize: newFontSize
        }
      }),
      withSlider: true
    })))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
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