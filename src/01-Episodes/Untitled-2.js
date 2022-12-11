import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import {
  Panel,
  PanelBody,
  PanelRow,
  SelectControl,
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
  ToggleControl,
  RangeControl,
  Dashicon,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";
import apiFetch from "@wordpress/api-fetch";
import React, { useEffect } from "react";

registerBlockType("wp-podcasts-305786/episodes", {
  title: __("Episodes Archive", "wp-podcasts-305786"),
  icon: "format-video",
  category: "wp_podcasts_305786_blocks",
  attributes: {
    alreadyLoaded: {
      type: "boolean",
      default: false,
    },
    allEpisodes: {
      type: "array",
      default: [],
    },
    allFilteredEpisodes: {
      type: "array",
      default: [],
    },
    episodes: {
      type: "array",
      default: [],
    },
    episodeTags: {
      type: "array",
      default: [],
    },
    sortEpisodes: {
      type: "string",
      default: "asc",
    },
    sortByCategory: {
      type: "string",
      default: "all",
    },
    hasTitle: {
      type: "boolean",
      default: true,
    },
    hasSubTitle: {
      type: "boolean",
      default: true,
    },
    hasAuthor: {
      type: "boolean",
      default: true,
    },
    hasEpisodeDetails: {
      type: "boolean",
      default: true,
    },
    hasButton: {
      type: "boolean",
      default: true,
    },
    amountOfEpisodes: {
      type: "number",
      default: 1,
    },
    amountOfEpisodesFiltered: {
      type: "number",
      default: 1,
    },
    sliceSubTitle: {
      type: "boolean",
      default: false,
    },
    subTitleCharacterAmount: {
      type: "number",
      default: 500,
    },
  },

  styles: [
    {
      name: "stacked",
      label: __("Stacked", "wp-podcasts-305786"),
      isDefault: true,
    },
    {
      name: "split",
      label: __("Split", "wp-podcasts-305786"),
    },
  ],

  edit: (props) => {
    // Pulling Set Attributes and Block Attributes from props
    let {
      attributes: {
        alreadyLoaded,
        episodes,
        sortEpisodes,
        episodeTags,
        sortByCategory,
        allEpisodes,
        hasTitle,
        hasSubTitle,
        hasAuthor,
        hasButton,
        hasEpisodeDetails,
        amountOfEpisodes,
        amountOfEpisodesFiltered,
        allFilteredEpisodes,
        sliceSubTitle,
        subTitleCharacterAmount,
      },
      className,
      setAttributes,
    } = props;

    let camelize = (str) => {
      return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, i) => {
          return word.toUpperCase();
        })
        .replace(/\s+/g, " ");
    };

    useEffect(() => {
      apiFetch({ path: "/wp/v2/tags?per_page=100" })
        .then((tags) => {
          return tags
        })
        .then((res) => {
          setAttributes({ episodeTags: res });
        })

        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Request has been aborted");
          }
        });

      apiFetch({ path: "/wp/v2/wp-podcasts-305786?per_page=25" })
        .then((posts) => {
          return posts
        })
        .then((res) => {
          setAttributes({ allEpisodes: res });
          if (!alreadyLoaded) {
            setAttributes({ amountOfEpisodes: res.length });
            setAttributes({ episodes: res });
            setAttributes({ alreadyLoaded: true });
          }
          console.log('made it')
        })

        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Request has been aborted");
          }
        });
    }, []);

    let onChangeFilterByCatergory = (category) => {
      setAttributes({ sortByCategory: category });
    };

    let onChangeSortEpisodes = (sortBy) => {
      setAttributes({ sortEpisodes: sortBy });
    };

    let onChangeAmountOfEpisodes = (amount) => {
      let allEpisodesCopy = [...allEpisodes];
      if (amount <= allEpisodesCopy.length && sortByCategory === "all") {
        setAttributes({ amountOfEpisodes: amount });
      } else if (amount <= allFilteredEpisodes.length) {
        setAttributes({ amountOfEpisodesFiltered: amount });
        setAttributes({ amountOfEpisodes: amount });
      }
    };

    let onChangeToggleTitle = (event) => {
      setAttributes({ hasTitle: event });
    };

    let onChangeToggleAuthor = (event) => {
      setAttributes({ hasAuthor: event });
    };

    let onChangeToggleEpisodeDetails = (event) => {
      setAttributes({ hasEpisodeDetails: event });
    };

    let onChangeSliceSubTitle = (event) => {
      setAttributes({ sliceSubTitle: event });
    };
    let onChangeSliceSubTitleAmount = (amount) => {
      setAttributes({ subTitleCharacterAmount: Number(amount) });
    };

    let onChangeToggleSubTitle = (event) => {
      setAttributes({ hasSubTitle: event });
    };

    let onChangeToggleButton = (event) => {
      setAttributes({ hasButton: event });
    };

    let showSubTitle = (subTitle) => {
      if (!hasSubTitle) return;
      !sliceSubTitle ? (
        <p
          className='wp-podcasts-305786-episode-subtitle'
          dangerouslySetInnerHTML={{ __html: `${subTitle[0]}` }}
        />
      ) : (
        <p
          className='wp-podcasts-305786-episode-subtitle'
          dangerouslySetInnerHTML={{
            __html: `${
              subTitle[0].slice(0, subTitleCharacterAmount) + "&nbsp;[..]"
            }`,
          }}
        />
      );
     return  <p
      className='wp-podcasts-305786-episode-subtitle'
      dangerouslySetInnerHTML={{
        __html: `${
          subTitle[0].slice(0, subTitleCharacterAmount) + "&nbsp;[..]"
        }`,
      }}
    />
    };

    let showEpisodeTitle = (topicTitle) => {
      if (!hasTitle) return;
      return (
        <h1
          className='wp-podcasts-305786-episode-title'
          dangerouslySetInnerHTML={{ __html: `${topicTitle}` }}
        />
      );
    };
    
    //Show episode tags returns array of objects with the tags name and id
    let showEpisodeTags = () => {
      if (episodeTags.length === 0) return;
      return episodeTags.map((tag, i) => {
          if (i === 0) {
            return {
              value: "all",
              label: "All Categories",
            };
          } else {
            return {
              value: tag.id,
              label: camelize(tag.name),
            };
          }
        })
    }

    let showEpisodeAuthor = (author) => {
      if (hasAuthor) return;
      return (
        <p className='wp-podcasts-305786-author'>
          <Dashicon icon='admin-users' />
          {author}
        </p>
      );
    };

    let showEpisodeDetails = (date, duration) => {
      if (hasEpisodeDetails) return;
      return (
        <p className='wp-podcasts-305786-episode-episode-details'>
          <span>
            <Dashicon icon='calendar-alt' /> Published:&nbsp;
            {new Date(date).toDateString()}&nbsp;
          </span>
          <span className='wp-podcasts-305786-episode-episode-duration-span'>
            <Dashicon icon='clock' />
            Duration:&nbsp;
            {duration}
          </span>
        </p>
      );
    };

    let showSubTitleSlice = () => {
      if (sliceSubTitle == null) return;
      return (
        <NumberControl
          step={1}
          value={subTitleCharacterAmount}
          onChange={(amount) => {
            onChangeSliceSubTitleAmount(amount);
          }}
        />
      );
    };

    let showButton = () => {
      if (hasButton == null) return;
      return (
        <a href='#' className='wp-podcasts-305786-episode-info-btn'>
          <button className='wp-block-button wp-element-button'>
            More info
          </button>
        </a>
      );
    };

    let showEpisodes = () => {
      let episodesCopy = [...episodes];
      let allEpisodesCopy = [...allEpisodes];
      let allFilteredEpisodesCopy = [...allFilteredEpisodes];

      if (
        episodesCopy.length === allEpisodesCopy.length &&
        sortByCategory === "all"
      ) {
        episodesCopy = allEpisodesCopy;
      } else if (sortByCategory === "all") {
        episodesCopy = episodesCopy.filter((episode, i) => {
          if (i + 1 <= amountOfEpisodes) {
            return episode;
          }
        });
      } else {
        episodesCopy = allFilteredEpisodesCopy.filter((episode, i) => {
          if (i + 1 <= amountOfEpisodesFiltered) {
            return episode;
          }
        });
      }

      if (sortEpisodes != "asc") {
        episodesCopy = episodesCopy.reverse();
      }
      console.log(subTitleCharacterAmount, "amnt");

      return episodesCopy.map((topic, i) => {
        return (
          <article
            className={`${className} wp-podcasts-305786-episodes-wrapper`}
          >
            <div className='wp-podcasts-305786-episode-thumbnail'>
              <img src={topic.fimg_url} />
            </div>
            <div className='wp-podcasts-305786-episode-info'>
              <div className='wp-podcasts-305786-episode-thumbnail-inner'>
                <img src={topic.fimg_url} />
              </div>
              <div className='wp-podcasts-305786-episode-info-inner'>
                {showEpisodeTitle(topic.title.rendered)}
                {showEpisodeAuthor(
                  topic.podcast_data.wp_podcasts_305786_author
                )}
                {showEpisodeDetails(
                  topic.date,
                  topic.podcast_data.wp_podcasts_305786_duration
                )}
                {showSubTitle(topic.podcast_data.wp_podcasts_305786_subtitle)}
                {showButton()}
              </div>
            </div>
          </article>
        );
      });
    };

    return [
      <InspectorControls>
        <Panel header={__("Episode Archive Settings", "wp-podcasts-305786")}>
          <PanelBody title={__("General Settings", "wp-podcasts-305786")}>
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <PanelRow>
                  <label className='components-base-control__label'>
                    <SelectControl
                      label={__("Sort By:")}
                      value={sortEpisodes}
                      onChange={(sortBy) => {
                        onChangeSortEpisodes(sortBy);
                      }}
                      options={[
                        {
                          label: __("Sort by", "wp-podcasts-305786"),
                          disabled: true,
                        },
                        { value: "asc", label: "Ascending" },
                        { value: "desc", label: "Descending" },
                      ]}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label>
                    <SelectControl
                      label={__("Filter By:")}
                      value={sortByCategory}
                      onChange={(filterBy) => {
                        onChangeFilterByCatergory(filterBy);
                      }}
                      options={showEpisodeTags()}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label>
                    <ToggleControl
                      label={__("Toggle Title")}
                      help={hasTitle ? __("Has Title") : __("No Title")}
                      checked={hasTitle}
                      onChange={(e) => onChangeToggleTitle(e)}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label>
                    <ToggleControl
                      label={__("Toggle Author")}
                      help={hasAuthor ? __("Has Author") : __("No Author")}
                      checked={hasAuthor}
                      onChange={(e) => onChangeToggleAuthor(e)}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label>
                    <ToggleControl
                      label={__("Toggle Details")}
                      help={
                        hasEpisodeDetails ? __("Has Details") : __("No Details")
                      }
                      checked={hasEpisodeDetails}
                      onChange={(e) => onChangeToggleEpisodeDetails(e)}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label>
                    <ToggleControl
                      label={__("Toggle Subtitle")}
                      help={
                        hasSubTitle ? __("Has Sub Title") : __("No Sub Title")
                      }
                      checked={hasSubTitle}
                      onChange={(e) => onChangeToggleSubTitle(e)}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label>
                    <ToggleControl
                      label={__("Toggle Button")}
                      help={hasButton ? __("Has Button") : __("No Button")}
                      checked={hasButton}
                      onChange={(e) => onChangeToggleButton(e)}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label>
                    <RangeControl
                      label={__("Number of Episodes")}
                      help={__(
                        "Filter by number if episodes you like to display"
                      )}
                      value={amountOfEpisodes}
                      min={1}
                      max={allEpisodes.length}
                      onChange={(amount) => onChangeAmountOfEpisodes(amount)}
                    />
                  </label>
                </PanelRow>
              </div>
            </div>
          </PanelBody>

          <PanelBody
            title={__("Title Settings", "wp-podcasts-305786")}
            initialOpen={false}
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <label className='components-base-control__label'></label>
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Subtitle Settings", "wp-podcasts-305786")}
            initialOpen={false}
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <label className='components-base-control__label'>
                  <ToggleControl
                    label={__("Limit Subtitle Character Count")}
                    help={
                      sliceSubTitle
                        ? __("Slice Subtitle")
                        : __("Don't Slice Subtitle")
                    }
                    checked={sliceSubTitle}
                    onChange={(e) => onChangeSliceSubTitle(e)}
                  />
                  {/* {showSubTitleSlice()} */}
                </label>
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Author Settings", "wp-podcasts-305786")}
            initialOpen={false}
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <label className='components-base-control__label'>yellow</label>
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Share Settings", "wp-podcasts-305786")}
            initialOpen={false}
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <label className='components-base-control__label'>yellow</label>
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Share Settings", "wp-podcasts-305786")}
            initialOpen={false}
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <label className='components-base-control__label'>yellow</label>
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Button Settings", "wp-podcasts-305786")}
            initialOpen={false}
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <label className='components-base-control__label'>yellow</label>
              </div>
            </div>
          </PanelBody>
        </Panel>
      </InspectorControls>,

      <section
        className={`wp-podcasts-305786-block wp-podcasts-305786-episodes`}
      >
        {showEpisodes()}
      </section>,
    ];
  },

  save(props) {
    return null;
  },
});
