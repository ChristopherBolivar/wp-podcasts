import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import {
  PanelBody,
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
import React, { useEffect, useState } from "react";

registerBlockType("wp-podcasts-305786/episodes", {
  title: __("Episodes Archive", "wp-podcasts-305786"),
  icon: "format-video",
  category: "wp_podcasts_305786_blocks",
  attributes: {
    allFilteredEpisodes: {
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
    amountOfEpisodes: {
      type: "number",
      default: 1,
    },
    amountOfEpisodesFiltered: {
      type: "number",
      default: 1,
    },
    spliceSubTitle: {
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
    const {
      attributes: {
        sortEpisodes,
        sortByCategory,
        hasTitle,
        hasSubTitle,
        amountOfEpisodes,
        spliceSubTitle,
        subTitleCharacterAmount,
      },
      className,
      setAttributes,

    } = props;

    const camelize = (str) => {
      return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, i) => {
          return word.toUpperCase();
        })
        .replace(/\s+/g, " ");
    };

    const [episodes, setEpisodes] = useState([])
    const [allEpisodes, setAllEpisodes] = useState([])
    const [episodeTags, setEpisodeTags] = useState([])

    useEffect(() => {
      apiFetch({ path: "/wp/v2/tags?per_page=100" })
        .then((tags) => {
          return tags;
        })
        .then((res) => {
         
          setEpisodeTags( res )

        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Request has been aborted");
          }
        });
    }, []);


   //When attributes sorty by category and amount of episodes are changes update episodes
    useEffect(() => {
      console.log(sortByCategory)
      let useFetch =
        sortByCategory != "all"
          ? apiFetch({
              path: `/wp/v2/wp-podcasts-305786?per_page=100&tags=${Number(
                sortByCategory
              )}`,
            })
          : apiFetch({ path: "/wp/v2/wp-podcasts-305786?per_page=25" });

      useFetch
        .then((posts) => {
          return posts;
        })
        .then((res) => {
          let filteredEpisodes = [...res].filter((episode, i) =>
          i + 1 <= amountOfEpisodes ? episode : null
        );
          setEpisodes( filteredEpisodes )
          setAllEpisodes(res)
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Request has been aborted");
          }
        });
    }, [sortByCategory, amountOfEpisodes]);


   
    let onChangeFilterByCatergory = (category) => {
      console.log(category, 'cat')
      setAttributes({ sortByCategory: category });
    };

    let onChangeSortEpisodes = (sortBy) => {
      setAttributes({ sortEpisodes: sortBy });
    };

    let onChangeAmountOfEpisodes = (amount) => {
      if (amount > allEpisodes.length) return;
      setAttributes({ amountOfEpisodes: amount });
    };

    let onChangeToggleTitle = (event) => {
      setAttributes({ hasTitle: event });
    };
    let onChangeSpliceSubTitle = (event) => {
      setAttributes({ spliceSubTitle: event });
    };
    let onChangeSpliceSubTitleAmount = (amount) => {
      setAttributes({ subTitleCharacterAmount: amount });
    };

    let onChangeToggleSubTitle = (event) => {
      setAttributes({ hasSubTitle: event });
    };

    let showSubTitle = (subTitle) => {
      if (hasSubTitle && spliceSubTitle) {
        return (
          <RichText.Content
            tagName='p'
            value={subTitle[0].slice(0, subTitleCharacterAmount) + "&nbsp;[..]"}
            className='wp-podcasts-305786-episode-subtitle'
          />
        );
      } else if (hasSubTitle) {
        return (
          <RichText.Content
            tagName='p'
            value={subTitle}
            className='wp-podcasts-305786-episode-subtitle'
          />
        );
      }
    };

    let showEpisodeTitle = (topicTitle) => {
      if (!hasTitle) return;
      return <h1 className='wp-podcasts-305786-episode-title'>{topicTitle}</h1>;
    };

    let showEpisodeTags = () => {
      if (!episodeTags) return;
      return episodeTags.map((tag, i) =>
        i === 0
          ? { value: "all", label: "All Categories" }
          : { value: tag.id, label: camelize(tag.name) }
      );
    };

    let showSubTitleSplice = () => {
      if (!spliceSubTitle) return;
      return (
        <NumberControl
          shiftStep={subTitleCharacterAmount}
          step={1}
          value={subTitleCharacterAmount}
          onChange={(amount) => {
            onChangeSpliceSubTitleAmount(amount);
          }}
        />
      );
    };

    let showEpisodes = () => {
     if(episodes.length <= 0) return;
      let episodesCopy = [...episodes];
     
      let displayEpisodes = episodesCopy.map((topic, i) => {
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
                <p>
                  <Dashicon icon='admin-users' />
                  {topic.podcast_data.wp_podcasts_305786_author}
                </p>
                <p className='wp-podcasts-305786-episode-episode-details'>
                  <span>
                    <Dashicon icon='calendar-alt' /> Published:&nbsp;
                    {new Date(topic.date).toDateString()}&nbsp;
                  </span>
                  <span className='wp-podcasts-305786-episode-episode-duration-span'>
                    <Dashicon icon='clock' />
                    Duration:&nbsp;
                    {topic.podcast_data.wp_podcasts_305786_duration}
                  </span>
                </p>
                {showSubTitle(topic.podcast_data.wp_podcasts_305786_subtitle)}
                <a href='' className='wp-podcasts-305786-episode-info-btn'>
                  <button className='wp-block-button wp-element-button'>
                    More info
                  </button>
                </a>
              </div>
            </div>
          </article>
        );
      });
      
      return displayEpisodes;
    };

    return [
      <InspectorControls>
        <PanelBody title={__("General Settings", "wp-podcasts-305786")}>
          <div className='components-base-control'>
            <div className='components-base-control__field'>
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
              <label>
                <SelectControl
                  label={__("Filter By:")}
                  value={sortByCategory}
                  onChange={(filterBy) => {console.log(filterBy)
                    onChangeFilterByCatergory(filterBy);
                  }}
                  options={showEpisodeTags()}
                />
              </label>
              <label>
                <ToggleControl
                  label={__("Toggle Title")}
                  help={hasTitle ? __("Has Title") : __("No Title")}
                  checked={hasTitle}
                  onChange={(e) => onChangeToggleTitle(e)}
                />
              </label>
              <label>
                <ToggleControl
                  label={__("Toggle Subtitle")}
                  help={hasSubTitle ? __("Has Sub Title") : __("No Sub Title")}
                  checked={hasSubTitle}
                  onChange={(e) => onChangeToggleSubTitle(e)}
                />
              </label>
              <label>
                <RangeControl
                  label={__("Number of Episodes")}
                  help={__("Filter by number if episodes you like to display")}
                  value={amountOfEpisodes}
                  min={1}
                  max={allEpisodes.length}
                  onChange={(amount) => onChangeAmountOfEpisodes(amount)}
                />
              </label>
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Title Settings", "wp-podcasts-305786")}>
          <div className='components-base-control'>
            <div className='components-base-control__field'>
              <label className='components-base-control__label'></label>
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Subtitle Settings", "wp-podcasts-305786")}>
          <div className='components-base-control'>
            <div className='components-base-control__field'>
              <label className='components-base-control__label'>
                <ToggleControl
                  label={__("Limit Subtitle Character Count")}
                  help={
                    spliceSubTitle
                      ? __("Don't Splice Subtitle")
                      : __("Splice Subtitle")
                  }
                  checked={spliceSubTitle}
                  onChange={(e) => onChangeSpliceSubTitle(e)}
                />
                {showSubTitleSplice()}
              </label>
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Author Settings", "wp-podcasts-305786")}>
          <div className='components-base-control'>
            <div className='components-base-control__field'>
              <label className='components-base-control__label'>yellow</label>
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Share Settings", "wp-podcasts-305786")}>
          <div className='components-base-control'>
            <div className='components-base-control__field'>
              <label className='components-base-control__label'>yellow</label>
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Share Settings", "wp-podcasts-305786")}>
          <div className='components-base-control'>
            <div className='components-base-control__field'>
              <label className='components-base-control__label'>yellow</label>
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Button Settings", "wp-podcasts-305786")}>
          <div className='components-base-control'>
            <div className='components-base-control__field'>
              <label className='components-base-control__label'>yellow</label>
            </div>
          </div>
        </PanelBody>
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
