import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  RichText,
  ColorPaletteControl,
} from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
  ToggleControl,
  RangeControl,
  Dashicon,
  __experimentalNumberControl as NumberControl,
  FontSizePicker,
} from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
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
    hasDescription: {
      type: "boolean",
      default: false,
    },
    hasSubTitle: {
      type: "boolean",
      default: true,
    },
    hasAuthor: {
      type: "boolean",
      default: true,
    },
    hasThumbnail: {
      type: "boolean",
      default: true,
    },
    hasDate: {
      type: "boolean",
      default: true,
    },
    hasDuration: {
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
      default: "wp-podcasts-305786-flex wp-podcasts-305786-col-1",
    },
    titleColor: {
      type: "string",
      default: "#000000",
    },
    titleFontSize: {
      type: "number",
      default: 26,
    },
    subTitleColor: {
      type: "string",
      default: "#000000",
    },
    subTitleFontSize: {
      type: "number",
      default: 14,
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
    {
      name: "stacked-card",
      label: __("Stacked Card", "wp-podcasts-305786"),
    },
    {
      name: "split-card",
      label: __("Split Card", "wp-podcasts-305786"),
    },
  ],

  edit: (props) => {
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
        subTitleFontSize,
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
          console.log(posts);
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

    const onChangeAmountOfColumns = (amount) => {
      if (amount > episodes.length) return;
      setAttributes({
        amountOfColumns: amount,
        gridClasses: "wp-podcasts-305786-flex wp-podcasts-305786-col-" + amount,
      });
    };

    const onChangeAmountOfEpisodes = (amount) => {
      if (amount > allEpisodes.length) return;
      setAttributes({ amountOfEpisodes: amount });
    };

    const onChangeToggleTitle = (event) => {
      setAttributes({ hasTitle: event });
    };
    const onChangeToggleThumbnail = (event) => {
      setAttributes({ hasThumbnail: event });
    };
    const onChangeToggleDate = (event) => {
      setAttributes({ hasDate: event });
    };
    const onChangeToggleDuration = (event) => {
      setAttributes({ hasDuration: event });
    };
    const onChangeToggleButton = (event) => {
      setAttributes({ hasButton: event });
    };
    const onChangeToggleDescription = (event) => {
      setAttributes({ hasDescription: event });
    };
    const onChangeSpliceSubTitle = (event) => {
      setAttributes({ spliceSubTitle: event });
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
            style={{ color: subTitleColor, fontSize: subTitleFontSize }}
          />
        );
      } else if (hasSubTitle) {
        return (
          <RichText.Content
            tagName='p'
            value={subTitle}
            className='wp-podcasts-305786-episode-subtitle'
            style={{ color: subTitleColor, fontSize: subTitleFontSize }}
          />
        );
      }
    };

    const showEpisodeThumbnail = (thumbnail, altTitle) => {
      if (!hasThumbnail) return;
      return (
        <div className='wp-podcasts-305786-episode-thumbnail'>
          <img alt={`${altTitle} thumbnail`} src={thumbnail} />
        </div>
      );
    };
    const showEpisodeDate = (date) => {
      if (!hasDate) return;
      return (
        <p>
          <Dashicon icon='calendar-alt' /> Published:&nbsp;
          {date}&nbsp;
        </p>
      );
    };
    const showDesciption = (description) => {
      if (!hasDescription) return;
      return <RichText tagName='p' value={description} />;
    };

    const showEpisodeDuration = (duration) => {
      if (!hasDuration) return;
      return (
        <p className='wp-podcasts-305786-episode-episode-duration-span'>
          <Dashicon icon='clock' />
          &nbsp;Duration:&nbsp;
          {duration}
        </p>
      );
    };

    const showEpisodeButton = (date) => {
      if (!hasButton) return;
      return (
        <a href='#' className='wp-podcasts-305786-episode-info-btn'>
          <button>More info</button>
        </a>
      );
    };

    const showEpisodeTitle = (topicTitle) => {
      if (!hasTitle) return;
      return (
        <RichText.Content
          tagName='h1'
          value={topicTitle}
          className='wp-podcasts-305786-episode-title'
          style={{ color: titleColor, fontSize: titleFontSize }}
        />
      );
    };

    const showEpisodeAuthor = (author) => {
      console.log(author.length, hasAuthor);
      if (!hasAuthor || author.length === 0) return;
      <p className='wp-podcasts-305786-author'>
        <Dashicon icon='admin-users' />
        &nbsp;heyy
        {author}
      </p>;
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
          step={1}
          onChange={(amount) => {
            setAttributes({ subTitleCharacterAmount: Number(amount) });
          }}
          value={subTitleCharacterAmount}
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
            {showEpisodeThumbnail(topic.fimg_url, topic.title.rendered)}
            <div className='wp-podcasts-305786-episode-info'>
              {showEpisodeTitle(topic.title.rendered)}
              {showEpisodeAuthor(topic.podcast_data.wp_podcasts_305786_author)}
              {showEpisodeDate(new Date(topic.date).toDateString())}
              {showEpisodeDuration(
                topic.podcast_data.wp_podcasts_305786_duration
              )}
              {showDesciption(
                topic.podcast_data.wp_podcasts_305786_description
              )}
              {showSubTitle(topic.podcast_data.wp_podcasts_305786_subtitle)}
              {showEpisodeButton()}
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
              <label className='wp-podcasts-305786-labels'>
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
              <label className='wp-podcasts-305786-labels'>
                <RangeControl
                  label={__("Number of Episodes")}
                  help={__("Filter by number if episodes you like to display")}
                  value={amountOfEpisodes}
                  min={1}
                  max={allEpisodes.length}
                  onChange={(amount) => onChangeAmountOfEpisodes(amount)}
                />
              </label>
              <label className='wp-podcasts-305786-labels'>
                <RangeControl
                  label={__("Number of Columns")}
                  allowReset
                  value={amountOfColumns}
                  min={1}
                  onChange={(amount) => onChangeAmountOfColumns(amount)}
                  max={12}
                />
              </label>

              <label className='wp-podcasts-305786-labels'>
                <ToggleControl
                  label={__("Toggle Thumbnail")}
                  help={hasTitle ? __("Has Thumbnail") : __("No Thumbnail")}
                  checked={hasThumbnail}
                  onChange={(e) => onChangeToggleThumbnail(e)}
                />
              </label>
              <label className='wp-podcasts-305786-labels'>
                <ToggleControl
                  label={__("Toggle Title")}
                  help={hasTitle ? __("Has Title") : __("No Title")}
                  checked={hasTitle}
                  onChange={(e) => onChangeToggleTitle(e)}
                />
              </label>
              <label className='wp-podcasts-305786-labels'>
                <ToggleControl
                  label={__("Toggle Description")}
                  help={
                    hasDescription
                      ? __("Has Description")
                      : __("No Description")
                  }
                  checked={hasDescription}
                  onChange={(e) => onChangeToggleDescription(e)}
                />
              </label>
              <label className='wp-podcasts-305786-labels'>
                <ToggleControl
                  label={__("Toggle Subtitle")}
                  help={hasSubTitle ? __("Has Sub Title") : __("No Sub Title")}
                  checked={hasSubTitle}
                  onChange={(e) => onChangeToggleSubTitle(e)}
                />
              </label>
              <label className='wp-podcasts-305786-labels'>
                <ToggleControl
                  label={__("Toggle Publish Date")}
                  help={hasDate ? __("Has Date") : __("No Date")}
                  checked={hasDate}
                  onChange={(e) => onChangeToggleDate(e)}
                />
              </label>
              <label className='wp-podcasts-305786-labels'>
                <ToggleControl
                  label={__("Toggle Duration")}
                  help={hasDuration ? __("Has Duration") : __("No Duration")}
                  checked={hasDuration}
                  onChange={(e) => onChangeToggleDuration(e)}
                />
              </label>
              <label className='wp-podcasts-305786-labels'>
                <ToggleControl
                  label={__("Toggle Button")}
                  help={hasButton ? __("Has Button") : __("No Button")}
                  checked={hasButton}
                  onChange={(e) => onChangeToggleButton(e)}
                />
              </label>
            </div>
          </div>
        </PanelBody>
        <PanelBody
          title={__("Title Settings", "wp-podcasts-305786")}
          initialOpen={false}
        >
          <div className='components-base-control'>
            <div className='components-base-control__field'>
              <label className='components-base-control__label'>
                <ColorPaletteControl
                  value={titleColor}
                  onChange={(color) => setAttributes({ titleColor: color })}
                />
                <FontSizePicker
                  fontSizes={[
                    {
                      name: __("Small"),
                      slug: "small",
                      size: 12,
                    },
                    {
                      name: __("Medium"),
                      slug: "medium",
                      size: 26,
                    },
                    {
                      name: __("Big"),
                      slug: "big",
                      size: 36,
                    },
                  ]}
                  value={titleFontSize}
                  fallbackFontSize={26}
                  onChange={(newFontSize) =>
                    setAttributes({ titleFontSize: newFontSize })
                  }
                  withSlider
                />
              </label>
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
                    spliceSubTitle
                      ? __("Don't Splice Subtitle")
                      : __("Splice Subtitle")
                  }
                  checked={spliceSubTitle}
                  onChange={(e) => onChangeSpliceSubTitle(e)}
                />
                {showSubTitleSplice()}

                <ColorPaletteControl
                  value={subTitleColor}
                  onChange={(color) => setAttributes({ subTitleColor: color })}
                />
                <FontSizePicker
                  fontSizes={[
                    {
                      name: __("Small"),
                      slug: "small",
                      size: 14,
                    },
                    {
                      name: __("Medium"),
                      slug: "medium",
                      size: 18,
                    },
                    {
                      name: __("Big"),
                      slug: "big",
                      size: 24,
                    },
                  ]}
                  value={subTitleFontSize}
                  fallbackFontSize={14}
                  max={36}
                  onChange={(newFontSize) =>
                    setAttributes({ subTitleFontSize: newFontSize })
                  }
                  withSlider
                />
              </label>
            </div>
          </div>
        </PanelBody>
        <PanelBody
          title={__("Publish Date Settings", "wp-podcasts-305786")}
          initialOpen={false}
        >
          <div className='components-base-control'>
            <div className='components-base-control__field'>
              <label className='components-base-control__label'>
                <ColorPaletteControl
                  value={subTitleColor}
                  onChange={(color) => setAttributes({ subTitleColor: color })}
                />
                <FontSizePicker
                  fontSizes={[
                    {
                      name: __("Small"),
                      slug: "small",
                      size: 14,
                    },
                    {
                      name: __("Medium"),
                      slug: "medium",
                      size: 18,
                    },
                    {
                      name: __("Big"),
                      slug: "big",
                      size: 24,
                    },
                  ]}
                  value={subTitleFontSize}
                  fallbackFontSize={14}
                  max={36}
                  onChange={(newFontSize) =>
                    setAttributes({ subTitleFontSize: newFontSize })
                  }
                  withSlider
                />
              </label>
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
