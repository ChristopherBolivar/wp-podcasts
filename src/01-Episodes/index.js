import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
  ToggleControl,
  RangeControl,
} from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";
import apiFetch from "@wordpress/api-fetch";
import React, { useEffect } from "react";

registerBlockType("wp-podcasts-305786/episodes", {
  title: __("Episodes Archive", "wp-podcasts-305786"),
  icon: "format-video",
  category: "wp_podcasts_305786_blocks",
  attributes: {
    allEpisodes: {
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
    amountOfEpisodes: {
      type: "number",
      default: 1,
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
        episodes,
        sortEpisodes,
        episodeTags,
        sortByCategory,
        allEpisodes,
        hasTitle,
        hasSubTitle,
        amountOfEpisodes,
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

    useEffect(() => {
      apiFetch({ path: "/wp/v2/tags?per_page=100" })
        .then((tags) => {
          return tags;
        })
        .then((results) => {
          setAttributes({ episodeTags: results });
        });

      apiFetch({ path: "/wp/v2/wp-podcasts-305786" })
        .then((posts) => {
          return posts;
        })
        .then((res) => {
          setAttributes({ allEpisodes: res });
          setAttributes({ episodes: res });
          setAttributes({ amountOfEpisodes: res.length });
        })

        .catch((error) => {
          // If the browser doesn't support AbortController then the code below will never log.
          // However, in most cases this should be fine as it can be considered to be a progressive enhancement.
          if (error.name === "AbortError") {
            console.log("Request has been aborted");
          }
        });
    }, []);

    let onChangeFilterByCatergory = (category) => {
      let episodesCopy = [];

      setAttributes({ sortByCategory: category });
      
      if (category != "all") {
        episodesCopy = [...allEpisodes].filter((episode, i) => {
          if (episode.tags.includes(Number(category))) {
            return episode;
          }
        })
      }

      if (category === "all") {
        episodesCopy = [...allEpisodes]
        // console.log(episodes.length, "here");
        // setAttributes({ episodes: [...allEpisodes] });
        // setAttributes({ amountOfEpisodes:  [...allEpisodes].length });
      }

        setAttributes({ episodes: episodesCopy });
        setAttributes({ amountOfEpisodes:  episodesCopy.length });

    };

    let onChangeSortEpisodes = (sortBy) => {
      let episodesCopy = [...episodes];

      if (sortBy === "asc") {
        episodesCopy.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

      }

      if (sortBy === "desc") {
        episodesCopy = [...allEpisodes].reverse()
      }
      setAttributes({ episodes: episodesCopy });
      setAttributes({ sortEpisodes: sortBy });
      setAttributes({ amountOfEpisodes: episodesCopy.length });

    };



    let onChangeAmountOfEpisodes = (amount) => {


      let episodesCopy = [...episodes];
      let allEpisodesCopy = [...allEpisodes];

    
      setAttributes({ amountOfEpisodes: amount });
    

      if (sortEpisodes != "asc") {
        episodesCopy = episodesCopy.reverse();
      }
       
      if (sortByCategory != "all") {

        episodesCopy = allEpisodesCopy.filter((episode, i) => {
          if (episode.tags.includes(Number(sortByCategory))) {
            return episode;
          }
        });

        console.log(episodesCopy, 'step1')
        episodesCopy = allEpisodesCopy.filter((episode,i)=>{
          i + 1
          if(i <= amount){
            return episode
          }
        })
        console.log(episodesCopy, 'step2')
   
      }




      if (amount === allEpisodesCopy.length) {

        setAttributes({ episodes: allEpisodesCopy });

      }else {
        episodesCopy = allEpisodesCopy.filter((episode,i)=>{
          if(i + 1 <= amount){
            return episode
          }
        })

        setAttributes({ amountOfEpisodes: episodesCopy.length });
        setAttributes({ episodes:  episodesCopy});

      }
      
      setAttributes({ amountOfEpisodes: episodesCopy.length });
     
    };

    let onChangeToggleTitle = (event) => {
      setAttributes({ hasTitle: event });
    };

    let onChangeToggleSubTitle = (event) => {
      setAttributes({ hasSubTitle: event });
    };

    let showSubTitle = (subTitle) => {
      if (hasSubTitle) {
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
      if (hasTitle) {
        return (
          <h1 className='wp-podcasts-305786-episode-title'>{topicTitle}</h1>
        );
      }
    };

    let showEpisodeTags = () => {
      if (episodeTags) {
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
        });
      }
    };

    let showEpisodes = () => {
      let episodesCopy = [...episodes];
      let allEpisodesCopy = [...allEpisodes];

  

      if (sortByCategory != "all" && episodesCopy.length != 1) {
        episodesCopy =  allEpisodesCopy.filter((episode, i) => {
          if (episode.tags.includes(Number(sortByCategory))) {
            return episode;
          }
        });

        console.log(episodesCopy, sortByCategory, 'here?')
      }

      if (sortEpisodes === "asc") {
        episodesCopy = episodesCopy.sort(function (a, b){
          return new Date(b.date) + new Date(a.date);
        });
        console.log('ascc', episodesCopy)
      }else {
       
        episodesCopy = episodesCopy.reverse()
      }

      setAttributes({ amountOfEpisodes: episodesCopy.length });

      console.log(episodesCopy, sortEpisodes, 'fin')
     
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
                {showSubTitle(topic.podcast_data.wp_podcasts_305786_subtitle)}

                <p className='wp-podcasts-305786-episode-episode-duration'>
                  <span className='wp-podcasts-305786-episode-episode-duration-span'>
                    Duration:
                  </span>{" "}
                  {topic.podcast_data.wp_podcasts_305786_duration}
                </p>
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
                  label='Columns'
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
        <PanelBody title={__("Thumbnail Settings", "wp-podcasts-305786")}>
          <div className='components-base-control'>
            <div className='components-base-control__field'>
              <label className='components-base-control__label'>yellow</label>
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
