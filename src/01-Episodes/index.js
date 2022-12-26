import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  RichText,
  ColorPaletteControl,
} from "@wordpress/block-editor";
import {
  Panel,
  PanelRow,
  PanelBody,
  SelectControl,
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
  ToggleControl,
  RangeControl,
  Dashicon,
  __experimentalNumberControl as NumberControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  FontSizePicker,
} from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import apiFetch from "@wordpress/api-fetch";
import { useEffect, useState } from "@wordpress/element";

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
    episodeTitleSettings: {
      type: "object",
      default: {
        hasTitle: true,
        titleColor: "#000000",
        titleFontSize: 16,
      },
    },
    episodeSubTitleSettings: {
      type: "object",
      default: {
        hasSubTitle: false,
        subTitleColor: "#000000",
        subTitleFontSize: 14,
        spliceSubTitle: false,
        subTitleCharacterAmount: 500,
      },
    },
    episodeDescriptionSettings: {
      type: "object",
      default: {
        hasDescription: false,
      },
    },
    episodeAuthorSettings: {
      type: "object",
      default: {
        hasAuthor: true,
        authorColor: "#000000",
        authorFontSize: 14,
      },
    },
    episodeThumbnailSettings: {
      type: "object",
      default: {
        hasThumbnail: true,
      },
    },
    episodeDateSettings: {
      type: "object",
      default: {
        hasDate: true,
        publishDateColor: "#000000",
        publishDateFontSize: 14,
        hasCalendarIcon: true,
        displayPublishDateInline: false,
      },
    },
    episodeDurationSettings: {
      type: "object",
      default: {
        hasDuration: true,
        durationColor: "#000000",
        durationFontSize: 14,
        hasDurationIcon: true,
        displayDurationInline: false,
      },
    },
    episodeButtonSettings: {
      type: "object",
      default: {
        hasButton: true,
        buttonColor: "#000000",
        buttonFontSize: 14,
        hasButtonIcon: true,
        displayButtonInline: false,
      },
    },
    amountOfEpisodes: {
      type: "number",
      default: 1,
    },
    amountOfColumns: {
      type: "number",
      default: 1,
    },
    gridClasses: {
      type: "string",
      default: "wp-podcasts-305786-flex wp-podcasts-305786-col-1",
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
        amountOfEpisodes,
        amountOfColumns,
        spliceSubTitle,
        subTitleCharacterAmount,
        gridClasses,
        titleColor,
        titleFontSize,
        subTitleColor,
        subTitleFontSize,
        publishDateColor,
        publishDateFontSize,
        durationColor,
        durationFontSize,
        hasDurationIcon,
        hasCalendarIcon,
        hasButtonIcon,
        buttonColor,
        buttonFontSize,
        displayAuthorInline,
        displayDurationInline,
        displayPublishDateInline,
        displayButtonInline,
        episodeTitleSettings,
        episodeDescriptionSettings,
        episodeSubTitleSettings,
        episodeAuthorSettings,
        episodeThumbnailSettings,
        episodeDateSettings,
        episodeDurationSettings,
        episodeButtonSettings,
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

    const fontSizesBody = [
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
    ];

    const fontSizesHeadings = [
      {
        name: __("Small"),
        slug: "small",
        size: 16,
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
    ];

    const [episodes, setEpisodes] = useState([]);
    const [allEpisodes, setAllEpisodes] = useState([]);
    const [episodeTags, setEpisodeTags] = useState([]);

    const colors = [{ name: "Blue 20", color: "#72aee6" }];

    const defaultBorder = {
      color: "#72aee6",
      style: "dashed",
      width: "1px",
    };

    const [borders, setBorders] = useState({
      top: defaultBorder,
      right: defaultBorder,
      bottom: defaultBorder,
      left: defaultBorder,
    });

    const onChange = (newBorders) => setBorders(newBorders);

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
          //varialbe to hold the amount of episodes to show
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

    //create a function to update all the attributes dynamically

   
    const onChangeToggleThumbnail = (event) => {
      setAttributes({ episodeThumbnailSettings: { hasThumbnail: event } });
    };
    const onChangeToggleDate = (event) => {
      setAttributes({ episodeDateSettings: { hasDate: event } });
    };
    const onChangeToggleDuration = (event) => {
      setAttributes({ episodeDurationSettings: { hasDuration: event } });
    };
    const onChangeToggleButton = (event) => {
      setAttributes({ episodeButtonSettings: { hasButton: event } });
    };
    const onChangeToggleDescription = (event) => {
      setAttributes({ episodeDescriptionSettings: { hasDescription: event } });
    };
    const onChangeSpliceSubTitle = (event) => {
      setAttributes({ episodeSubTitleSettings: { spliceSubTitle: event } });
    };

    const onChangeToggleSubTitle = (event) => {
      setAttributes({ episodeSubTitleSettings: { hasSubTitle: event } });
    };

    const showSubTitle = (subTitle) => {
      if (
        episodeSubTitleSettings.hasSubTitle &&
        episodeSubTitleSettings.spliceSubTitle
      ) {
        return (
          <RichText.Content
            tagName='p'
            value={subTitle[0].slice(0,  episodeSubTitleSettings.subTitleCharacterAmount) + "&nbsp;[..]"}
            className='wp-podcasts-305786-episode-subtitle'
            style={{ color: episodeSubTitleSettings.subTitleColor, fontSize: episodeSubTitleSettings.subTitleFontSize }}
          />
        );
      } else if (episodeSubTitleSettings.hasSubTitle) {
        return (
          <RichText.Content
            tagName='p'
            value={subTitle}
            className='wp-podcasts-305786-episode-subtitle'
            style={{ color: episodeSubTitleSettings.subTitleColor, fontSize: episodeSubTitleSettings.subTitleFontSize }}
          />
        );
      }
    };

    const showEpisodeThumbnail = (thumbnail, altTitle) => {
      if (!episodeThumbnailSettings.hasThumbnail) return;
      return (
        <div className='wp-podcasts-305786-episode-thumbnail'>
          <img alt={`${altTitle} thumbnail`} src={thumbnail} />
        </div>
      );
    };
    const showEpisodeDate = (date) => {
      if (!episodeDateSettings.hasDate) return;

      const publishDateClass = episodeDateSettings.displayPublishDateInline
        ? "wp-podcasts-inline"
        : "";

      const calendarIcon = episodeDateSettings.hasCalendarIcon ? (
        <Dashicon icon='calendar-alt' style={{ paddingRight: "5px" }} />
      ) : (
        ""
      );

      return (
        <p
          className={`${publishDateClass}`}
          style={{ color: episodeDateSettings.publishDateColor, fontSize: episodeDateSettings.publishDateFontSize }}
        >
          {calendarIcon}
          Published:&nbsp;
          {date}&nbsp;
        </p>
      );
    };

    const showDesciption = (description) => {
      if (!episodeDescriptionSettings.hasDescription) return;
      return <div dangerouslySetInnerHTML={{ __html: description }}></div>;
    };

    const showEpisodeDuration = (duration) => {
      if (!episodeDurationSettings.hasDuration) return;

      const durationClass = episodeDurationSettings.displayDurationInline
        ? "wp-podcasts-inline"
        : "";
      const durationIcon = episodeDurationSettings.hasDurationIcon ? (
        <Dashicon icon='clock' style={{ paddingRight: "5px" }} />
      ) : (
       
        ""
      );

      console.log(episodeDurationSettings.hasDurationIcon);

      return (
        <p
          className={`wp-podcasts-305786-episode-episode-duration-span ${durationClass}`}
          style={{ color: episodeDurationSettings.durationColor, fontSize: episodeDurationSettings.durationFontSize}}
        >
          {durationIcon}
          Duration:&nbsp;
          {duration}
        </p>
      );
    };

    const showEpisodeButton = () => {
      if (!episodeButtonSettings.hasButton) return;

      const buttonIcon = episodeButtonSettings.hasButtonIcon
        ? "wp-podcasts-305786-episode-button-icon"
        : "";

      const buttonInlineBlock = episodeButtonSettings.displayButtonInline
        ? "wp-podcasts-inline"
        : "wp-podcasts-block";

      return (
        <a href='#' className={`${buttonIcon} ${buttonInlineBlock} wp-podcasts-305786-episode-info-btn`}>
          <button
            style={{
              fontSize: episodeButtonSettings.buttonFontSize,
              color: episodeButtonSettings.buttonColor,
            }}
          >
            More info
          </button>
        </a>
      );
    };

    const showEpisodeTitle = (topicTitle) => {
      if (!episodeTitleSettings.hasTitle) return;
      return (
        <RichText.Content
          tagName='h1'
          value={topicTitle}
          className='wp-podcasts-305786-episode-title'
          style={{
            color: episodeTitleSettings.titleColor,
            fontSize: episodeTitleSettings.titleFontSize,
          }}
        />
      );
    };

    const showEpisodeAuthor = (author) => {
      if (!episodeAuthorSettings.hasAuthor || author.length === 0) return;
      <p className='wp-podcasts-305786-author'>
        <Dashicon icon='admin-users' />
        &nbsp;
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
      if (! episodeSubTitleSettings.spliceSubTitle)  return;
      return (
        <NumberControl
          step={1}
          onChange={(amount) => {
            setAttributes({
              episodeSubTitleSettings: {
                ...episodeSubTitleSettings,
                subTitleCharacterAmount: amount,
              },
            });
          }}
          value={episodeSubTitleSettings.subTitleCharacterAmount}
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
        <Panel
          className='wp-podcasts-305786-panel'
          header={__("WP Podcast Settings", "wp-podcasts-305786")}
        >
          <PanelBody
            title={__("General Settings", "wp-podcasts-305786")}
            icon='admin-generic'
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
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
                </PanelRow>
                <PanelRow>
                  <label className='wp-podcasts-305786-labels'>
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
                <PanelRow>
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
                </PanelRow>
                <PanelRow>
                  <label className='wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Toggle Thumbnail")}
                      help={
                        episodeThumbnailSettings.hasThumbnail
                          ? __("Has Thumbnail")
                          : __("No Thumbnail")
                      }
                      checked={episodeThumbnailSettings.hasThumbnail}
                      onChange={(e) => onChangeToggleThumbnail(e)}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Toggle Title")}
                      help={
                        episodeTitleSettings.hasTitle
                          ? __("Has Title")
                          : __("No Title")
                      }
                      checked={episodeTitleSettings.hasTitle}
                      
                      onChange={(e) => setAttributes({ episodeTitleSettings: { ...episodeTitleSettings , hasTitle: e }})}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Toggle Description")}
                      help={
                        episodeDescriptionSettings.hasDescription
                          ? __("Has Description")
                          : __("No Description")
                      }
                      checked={episodeDescriptionSettings.hasDescription}
                      onChange={(e) => onChangeToggleDescription(e)}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Toggle Subtitle")}
                      help={
                        episodeSubTitleSettings.hasSubTitle
                          ? __("Has Sub Title")
                          : __("No Sub Title")
                      }
                      checked={episodeSubTitleSettings.hasSubTitle}
                      onChange={(e) => onChangeToggleSubTitle(e)}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Toggle Publish Date")}
                      help={
                        episodeDateSettings.hasDate
                          ? __("Has Date")
                          : __("No Date")
                      }
                      checked={episodeDateSettings.hasDate}
                      onChange={(e) => setAttributes({ episodeDateSettings: { ...episodeDateSettings, hasDate: e } }) }
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Toggle Duration")}
                      help={
                       episodeDurationSettings.hasDuration ? __("Has Duration") : __("No Duration")
                      }
                      checked={episodeDurationSettings.hasDuration}
                      onChange={(e) => setAttributes({ episodeDurationSettings: { ...episodeDurationSettings, hasDuration: e } }) }
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Toggle Button")}
                      help={ episodeButtonSettings.hasButton ? __("Has Button") : __("No Button")}
                      checked={episodeButtonSettings.hasButton}
                      onChange={(e) => setAttributes({ episodeButtonSettings: { ...episodeButtonSettings, hasButton: e } })}
                    />
                  </label>
                </PanelRow>
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Title Settings", "wp-podcasts-305786")}
            initialOpen={false}
            icon='heading'
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <RichText.Content
                      tagName='h2'
                      value={__("ChangeFont Color", "wp-podcasts-305786")}
                    />
                    <ColorPaletteControl
                      value={episodeTitleSettings.titleColor}
                      onChange={(color) => setAttributes({ episodeTitleSettings: { ...episodeTitleSettings, titleColor: color } })}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <RichText.Content
                      tagName='h2'
                      value={__("Change Font Size", "wp-podcasts-305786")}
                    />
                    <FontSizePicker
                      fontSizes={fontSizesHeadings}
                      value={episodeTitleSettings.titleFontSize}
                      fallbackFontSize={26}
                      onChange={(newFontSize) =>
                        setAttributes({ episodeTitleSettings: { ...episodeTitleSettings, titleFontSize: newFontSize }})
                      }
                      withSlider
                    />
                  </label>
                </PanelRow>
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Subtitle Settings", "wp-podcasts-305786")}
            initialOpen={false}
            icon='text'
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Limit Subtitle Character Count")}
                      help={
                        episodeSubTitleSettings.spliceSubTitle
                          ? __("Don't Splice Subtitle")
                          : __("Splice Subtitle")
                      }
                      checked={episodeSubTitleSettings.spliceSubTitle}
                      onChange={(e) => {  setAttributes({ episodeSubTitleSettings: { ...episodeSubTitleSettings, spliceSubTitle: e } }) }}
                    />
                  </label>
                </PanelRow>
                {showSubTitleSplice()}
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <ColorPaletteControl
                      value={episodeSubTitleSettings.subTitleColor}
                      onChange={(color) =>
                        setAttributes({ episodeSubTitleSettings: { ...episodeSubTitleSettings, subTitleColor: color } })
                      }
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <FontSizePicker
                      fontSizes={fontSizesBody}
                      value={episodeSubTitleSettings.subTitleFontSize}
                      fallbackFontSize={14}
                      max={36}
                      onChange={(newFontSize) =>
                        setAttributes({ episodeSubTitleSettings: { ...episodeSubTitleSettings, subTitleFontSize: newFontSize } })
                      }
                      withSlider
                    />
                  </label>
                </PanelRow>
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Publish Date Settings", "wp-podcasts-305786")}
            initialOpen={false}
            icon='calendar-alt'
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Toggle Calendar Icon")}
                      help={
                        episodeDateSettings.hasCalendarIcon
                          ? __("Has Calendar Icon")
                          : __("No Calendar Icon")
                      }
                      checked={episodeDateSettings.hasCalendarIcon}
                      onChange={(e) => setAttributes({ episodeDateSettings: { ...episodeDateSettings, hasCalendarIcon: e } })}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Display Inline")}
                      help={
                        episodeDateSettings.displayPublishDateInline
                          ? __("Display Inline")
                          : __("Display Block")
                      }
                      checked={episodeDateSettings.displayPublishDateInline}
                      onChange={(e) =>
                        setAttributes({ episodeDateSettings: { ...episodeDateSettings, displayPublishDateInline: e } })
                      }
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <RichText.Content
                      tagName='h3'
                      value={__("Change Font Color", "wp-podcasts-305786")}
                    />
                    <ColorPaletteControl
                      value={episodeDateSettings.publishDateColor}
                      onChange={(color) =>
                        setAttributes({ episodeDateSettings: { ...episodeDateSettings, publishDateColor: color } })
                      }
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <RichText.Content
                      tagName='h3'
                      value={__("Change Font Size", "wp-podcasts-305786")}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <FontSizePicker
                      fontSizes={fontSizesBody}
                      value={episodeDateSettings.publishDateFontSize}
                      fallbackFontSize={14}
                      max={36}
                      onChange={(newFontSize) =>
                        setAttributes({ episodeDateSettings: { ...episodeDateSettings, publishDateFontSize: newFontSize } })
                      }
                      withSlider
                    />
                  </label>
                </PanelRow>
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Duration Settings", "wp-podcasts-305786")}
            initialOpen={false}
            icon='clock'
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Toggle Duration Icon")}
                      help={episodeDurationSettings.hasDurationIcon ? __("Has Icon") : __("No Icon")}
                      checked={episodeDurationSettings.hasDurationIcon }
                      onChange={(e) => setAttributes({ episodeDurationSettings: { ...episodeDurationSettings, hasDurationIcon: e }})}
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Display Inline")}
                      help={
                        displayDurationInline
                          ? __("Display Inline")
                          : __("Display Block")
                      }
                      checked={displayDurationInline}
                      onChange={(e) =>
                        setAttributes({ displayDurationInline: e })
                      }
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <ColorPaletteControl
                      value={durationColor}
                      onChange={(color) =>
                        setAttributes({ durationColor: color })
                      }
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <FontSizePicker
                      fontSizes={fontSizesBody}
                      value={durationFontSize}
                      fallbackFontSize={14}
                      max={36}
                      onChange={(newFontSize) =>
                        setAttributes({ durationFontSize: newFontSize })
                      }
                      withSlider
                    />
                  </label>
                </PanelRow>
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Button Settings", "wp-podcasts-305786")}
            initialOpen={false}
          >
            <div className='components-base-control'>
              <div className='components-base-control__field'>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Toggle Button Icon")}
                      help={episodeButtonSettings.hasButtonIcon ? __("Has Icon") : __("No Icon")}
                      checked={episodeButtonSettings.hasButtonIcon}
                      onChange={(e) => setAttributes({ episodeButtonSettings: { ...episodeButtonSettings, hasButtonIcon: e } })}
                    />
                  </label>
                </PanelRow>

                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <ToggleControl
                      label={__("Display Inline")}
                      help={
                        episodeButtonSettings.displayButtonInline
                          ? __("Display Inline")
                          : __("Display Block")
                      }
                      checked={episodeButtonSettings.displayButtonInline}
                      onChange={(e) =>
                        setAttributes({ episodeButtonSettings: { ...episodeButtonSettings, displayButtonInline: e } })
                      }
                    />
                  </label>
                </PanelRow>

                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <BorderBoxControl
                      colors={colors}
                      label={__("Borders")}
                      onChange={onChange}
                      value={borders}
                    />
                  </label>
                </PanelRow>

                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <RichText.Content
                      tagName='h3'
                      value={__("Font Color", "wp-podcasts-305786")}
                    />
                    <ColorPaletteControl
                      value={episodeButtonSettings.buttonColor}
                      onChange={(color) =>
                        setAttributes({ episodeButtonSettings: { ...episodeButtonSettings, buttonColor: color } })
                      }
                    />
                  </label>
                </PanelRow>
                <PanelRow>
                  <label className='components-base-control__label wp-podcasts-305786-labels'>
                    <RichText.Content
                      tagName='h3'
                      value={__("Font Size", "wp-podcasts-305786")}
                    />
                    <FontSizePicker
                      fontSizes={fontSizesBody}
                      value={episodeButtonSettings.buttonFontSize }
                      fallbackFontSize={14}
                      max={36}
                      onChange={(newFontSize) =>
                        setAttributes({ episodeButtonSettings: { ...episodeButtonSettings, buttonFontSize: newFontSize } })
                      }
                      withSlider
                    />
                  </label>
                </PanelRow>
              </div>
            </div>
          </PanelBody>
        </Panel>
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
