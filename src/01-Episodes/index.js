import { __ } from "@wordpress/i18n";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
  QueryControls,
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
    },
    episodes: {
      type: "array",
    },
    episodeTags: {
      type: "array",
    },
    sortEpisodes: {
      type: "string",
      default: "asc",
    },
    sortByCategory: {
      type: "string",
      default: "all",
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
      attributes: { episodes, sortEpisodes, episodeTags,sortByCategory, allEpisodes },
      className,
      setAttributes,
    } = props;




    const camelize = (str) => {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, i)=>{ 
        return  word.toUpperCase();
      }).replace(/\s+/g, ' ');
    }




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
       
          setAttributes({ allEpisodes: res})

          if (sortByCategory === 'all') {
            if(sortEpisodes === 'asc'){
            setAttributes({ episodes: res})
            }
            if(sortEpisodes ==="desc"){
              setAttributes({ episodes: res.reverse()})
            }
          }else if (sortByCategory != 'all') {
            if(sortEpisodes === 'asc'){
              setAttributes({ episodes: res.filter((episode,i)=>{
                if(episode.tags.includes(Number(sortByCategory))){
                  return episode
                }
              })});
              }
              if(sortEpisodes ==="desc"){
                setAttributes({ episodes: res.filter((episode,i)=>{
                  if(episode.tags.includes(Number(sortByCategory))){
                    return episode
                  }
                }).reverse()});
              }
            
            
          }
        })
     
        .catch((error) => {
          // If the browser doesn't support AbortController then the code below will never log.
          // However, in most cases this should be fine as it can be considered to be a progressive enhancement.
          if (error.name === "AbortError") {
            console.log("Request has been aborted");
          }
        });
    }, []);




    let onChangeFilterByCatergory = (category) =>{
 
      setAttributes({ sortByCategory: category });

      if (category != 'all') {
        if(sortEpisodes === 'asc'){
          setAttributes({ episodes: [...allEpisodes].filter((episode,i)=>{
            if(episode.tags.includes(Number(category))){
              return episode
            }
          })})
        }
        if(sortEpisodes === 'desc'){
          setAttributes({ episodes: [...allEpisodes].filter((episode,i)=>{
            if(episode.tags.includes(Number(category))){
              return episode
            }
          }).reverse()})
        }
    }
      if (category === 'all') {
        if(sortEpisodes === 'asc'){
        setAttributes({ episodes: [...allEpisodes]})
        }
        if(sortEpisodes === 'desc'){
          setAttributes({ episodes: [...allEpisodes].reverse()})
        }

    }
    }


    let onChangeSortEpisodes = (sortBy) => {
      let episodesCopy = [...episodes];

      if (sortBy === "asc") {
        episodesCopy.sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.date) - new Date(a.date);
        });

        setAttributes({ episodes: episodesCopy });
        setAttributes({ sortEpisodes: sortBy });
      }

      if (sortBy === "desc") {
        let episodesReverse = episodesCopy.reverse();
        setAttributes({ episodes: episodesReverse });
        setAttributes({ sortEpisodes: sortBy });
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
   
      if (allEpisodes) {
        return [...episodes].map((topic, i) => {
          return (
            <article className={`${className} wp-podcasts-305786-episodes-wrapper`}>
              <div className='wp-podcasts-305786-episode-thumbnail'>
                <img src={topic.fimg_url} />
              </div>
              <div className='wp-podcasts-305786-episode-info'>
                <div className='wp-podcasts-305786-episode-thumbnail-inner'>
                  <img src={topic.fimg_url} />
                </div>
                <div className='wp-podcasts-305786-episode-info-inner'>
                  <h1 className='wp-podcasts-305786-episode-title'>
                    {topic.title.rendered}
                  </h1>
                  <RichText.Content
                    tagName='p'
                    value={topic.podcast_data.wp_podcasts_305786_subtitle}
                    className='wp-podcasts-305786-episode-subtitle'
                  />
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
      }
  
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

      <section className={`wp-podcasts-305786-block wp-podcasts-305786-episodes`}>
        {showEpisodes()}
      </section>,
    ];
  },

  save(props) {
    return null;
  },
});
