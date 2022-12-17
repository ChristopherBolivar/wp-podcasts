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
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import apiFetch from "@wordpress/api-fetch";
import React, { useEffect, useState } from "react";

registerBlockType("wp-podcasts-305786/episodes", {
  title: __("Episodes Archive", "wp-podcasts-305786"),
  icon: "format-video",
  category: "wp_podcasts_305786_blocks",
  attributes: {
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
    amountOfColumns: {
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
    gridClasses: {
      type: "string",
      default: 'wp-podcasts-305786-flex wp-podcasts-305786-col-1',
    }
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
    {
      name: "stacked-card",
      label: __("Stacked Card", "wp-podcasts-305786"),
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
        amountOfColumns,
        spliceSubTitle,
        subTitleCharacterAmount,
        gridClasses,
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

    const [episodes, setEpisodes] = useState([]);
    const [allEpisodes, setAllEpisodes] = useState([]);
    const [episodeTags, setEpisodeTags] = useState([]);

    useEffect(() => {
      apiFetch({ path: "/wp/v2/tags?per_page=100" })
        .then((tags) => {
          return tags;
        })
        .then((res) => {
          setEpisodeTags(res);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Request has been aborted");
          }
        });
    }, []);

    //When attributes sorty by category and amount of episodes are changes update episodes
    useEffect(() => {
      console.log(sortByCategory);
      const useFetch =
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
          const filteredEpisodes = [...res].filter((episode, i) =>
            i + 1 <= amountOfEpisodes ? episode : null
          );
          setEpisodes(filteredEpisodes);
          setAllEpisodes(res);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Request has been aborted");
          }
        });
    }, [sortByCategory, amountOfEpisodes]);

    const onChangeFilterByCatergory = (category) => {
      setAttributes({ sortByCategory: category });
    };

    const onChangeSortEpisodes = (sortBy) => {
      setAttributes({ sortEpisodes: sortBy });
    };

    const onChangeAmountOfColumns = (amount) =>{
      if(amount > episodes.length) return;
      setAttributes({ amountOfColumns: amount, gridClasses: 'wp-podcasts-305786-flex wp-podcasts-305786-col-'+amount});
    };

    const onChangeAmountOfEpisodes = (amount) => {
      if (amount > allEpisodes.length) return;
      setAttributes({ amountOfEpisodes: amount });
    };

    const onChangeToggconstitle = (event) => {
      setAttributes({ hasTitle: event });
    };
    const onChangeSpliceSubTitle = (event) => {
      setAttributes({ spliceSubTitle: event });
    };
    const onChangeSpliceSubTitleAmount = (amount) => {
      setAttributes({ subTitleCharacterAmount: amount });
    };

    const onChangeToggleSubTitle = (event) => {
      setAttributes({ hasSubTitle: event });
    };

    const showSubTitle = (subTitle) => {
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

    const showEpisodeTitle = (topicTitle) => {
      if (!hasTitle) return;
      return  <RichText.Content
      tagName='h1'
      value={topicTitle}
      className='wp-podcasts-305786-episode-title'
    />;
    };

    const showEpisodeTags = () => {
      if (!episodeTags) return;
      return episodeTags.map((tag, i) =>
        i != 0
          ? { value: tag.id, label: camelize(tag.name) }
          : { value: "all", label: "All Categories" }
      );
    };

    const showSubTitleSplice = () => {
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

    

    const showEpisodes = () => {
      if (episodes.length <= 0) return;

      const episodesCopy = [...episodes];
      const displayEpisodes = episodesCopy.map((topic, i) => {
        return (
          <article
            className={`${className} wp-podcasts-305786-episodes-wrapper`}
          >
            <div className='wp-podcasts-305786-episode-thumbnail'>
              <img alt={topic.title.rendered + ' thumbnail'} src={topic.fimg_url} />
            </div>
            <div className='wp-podcasts-305786-episode-info'>
              {showEpisodeTitle(topic.title.rendered)}
              
                <p className='wp-podcasts-305786-author'>
                  <Dashicon icon='admin-users' />&nbsp;
                  {topic.podcast_data.wp_podcasts_305786_author}
                </p>
                <p>
                  <Dashicon icon='calendar-alt' /> Published:&nbsp;
                  {new Date(topic.date).toDateString()}&nbsp;
                </p>
                <p className='wp-podcasts-305786-episode-episode-duration-span'>
                  <Dashicon icon='clock' />
                  &nbsp;Duration:&nbsp;
                  {topic.podcast_data.wp_podcasts_305786_duration}
                </p>
              {showSubTitle(topic.podcast_data.wp_podcasts_305786_subtitle)}
              <a href='#' className='wp-podcasts-305786-episode-info-btn'>
                <button className='wp-block-button wp-element-button'>
                  More info
                </button>
              </a>
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
                  onChange={(filterBy) => {
                    console.log(filterBy);
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
                  onChange={(e) => onChangeToggconstitle(e)}
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
              <label>
                <RangeControl
                  label={__("Number of Columns")}
                  allowReset
                  value={amountOfColumns}
                  min={1}
                  onChange={(amount) => onChangeAmountOfColumns(amount)}
                  max={12}
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
        <PanelBody title={__("Button Settings", "wp-podcasts-305786")}>
          <div className='components-base-control'>
            <div className='components-base-control__field'>
              <label className='components-base-control__label'>yellow</label>
            </div>
          </div>
        </PanelBody>
      </InspectorControls>,

      <section
        className={`wp-podcasts-305786-block wp-podcasts-305786-episodes ${gridClasses}`}
      >
        {showEpisodes()}
      </section>,
    ];
  },

  save(props) {
    return null;
  },
});
