import { __ } from "@wordpress/i18n";
import { Icon, more, check } from "@wordpress/icons";
import { InspectorControls } from "@wordpress/block-editor";

import {
  __experimentalInputControl as InputControl,
  Panel,
  PanelRow,
  PanelBody,
} from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  __experimentalBlockVariationPicker as BlockVariationPicker,
} from "@wordpress/block-editor";
import apiFetch from "@wordpress/api-fetch";
import { useEffect, useState } from "@wordpress/element";

registerBlockType("wp-podcasts-305786/player", {
  title: __("Episodes Player", "wp-podcasts-305786"),
  icon: "format-video",
  category: "wp_podcasts_305786_blocks",
  attributes: {
    episodeSettings: {
      type: "object",
      default: {
        sort: "asc",
        category: "all",
        amount: 1,
        columns: 1,
        totalPages: 1,
        totalEpisodes: 1,
        currentPage: 1,
        hasPagination: false,
        classStyle: "wp-podcasts-305786-flex wp-podcasts-305786-col-1",
      },
    },
    episodeId: {
      type: "number",
      default: 0,
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
      attributes: { sortByCategory, episodeSettings, episodeId },
      className,
      setAttributes,
    } = props;

    const [episodes, setEpisodes] = useState([]);
    const [searchTermResults, setSearchTermResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [episodeSelected, setEpisodeSelected] = useState(false);
    const [episodePlaying, setEpisodePlaying] = useState(false);
    const [episodeFile, setEpisodeFile] = useState("");

    // Search for episodes from API based on search term
    useEffect(() => {
      apiFetch({
        path: `/wp/v2/wp-podcasts-305786/?search=${searchTerm}`,
      }).then((episodes) => {
        if (searchTerm.split("").length <= 0) {
          return null;
        }
        setSearchTermResults(episodes);
      });
    }, [searchTerm]);

    //Get selected specific episode from API based on episodeId
    useEffect(() => {
      if (!episodeId || episodeId === 0) {
        return;
      }
      apiFetch({
        path: `/wp/v2/wp-podcasts-305786/${episodeId}`,
      }).then((episode) => {
        console.log(episode, "episode =-=-");
        setEpisodes([episode]);
        setEpisodeFile(
          new Audio(episode.podcast_data.wp_podcasts_305786_file_url[0])
        );
        setEpisodeSelected(true);
      });
    }, [episodeId]);

    // play episode mp3 when episodePlaying is true and pause when false
    useEffect(() => {
      if (episodes.length <= 0) {
        return;
      }

      episodePlaying ? episodeFile.play() : episodeFile.pause();
    }, [episodePlaying]);

    // Set the block props
    const blockProps = useBlockProps({
      className: "wp-podcasts-305786-block wp-podcasts-305786-episode-player",
    });

    const icons = {
      bed: (
        <svg
          width='24'
          height='24'
          xmlns='http://www.w3.org/2000/svg'
          fill-rule='evenodd'
          clip-rule='evenodd'
        >
          <path d='M24 19v-7h-23v-7h-1v14h1v-2h22v2h1zm-20-12c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm19 4c0-1.657-1.343-3-3-3h-13v3h16z' />
        </svg>
      ),
      layout: "layout",
      smiley: "smiley",
      columns: "columns",
      globe: "admin-site",
    };

    //function called searchEpisodes to search for episodes based on search term fron an InputControl component and set the search term to the value of the input field and displays the results in a dropdown
    const searchEpisodes = () => {
      return (
        <div className='wp-podcasts-305786-search'>
          <InputControl
            label='Search Episodes'
            value={searchTerm}
            onChange={(value) => {
              setSearchTerm(value);
            }}
          />
          <div className='wp-podcasts-305786-search-results'>
            {searchTermResults.map((episode) => {
              return (
                <div
                  onClick={(e) => {
                    setAttributes({ episodeId: episode.id });
                    setSearchTerm("");
                  }}
                  className='wp-podcasts-305786-search-result'
                >
                  <div className='wp-podcasts-305786-search-result-title'>
                    {episode.title.rendered}
                  </div>
                  <div className='wp-podcasts-305786-search-result-subtitle'>
                    {episode.podcast_data.wp_podcasts_305786_subtitle[0]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    //Show episode mp3 plauer if episode is selected
    const showEpisodePlayer = () => {
      if (!episodeSelected) {
        return;
      }

      return (
        <div className='wp-podcasts-305786-episode-player'>
          <div id='audio-player-container'>
            <p className='wp-podcasts-305786-episode-player-title'>
              {episodes[0].title.rendered}
            </p>
            <p className='wp-podcasts-305786-episode-player-title'>
              {episodes[0].podcast_data.wp_podcasts_305786_subtitle[0]}
            </p>
            <button
              onClick={(e) => {
                !episodePlaying
                  ? setEpisodePlaying(true)
                  : setEpisodePlaying(false);
              }}
              id='play-icon'
            >
              {!episodePlaying ? "Play" : "Pause"}
            </button>
            <span id='current-time' className='time'>
              0:00
            </span>
            <input type='range' id='seek-slider' max='100' value='0' />
            <span id='duration' className='time'>
              {episodes[0].podcast_data.wp_podcasts_305786_duration[0]}
            </span>
            <button id='mute-icon'>Mute</button>
          </div>
        </div>
      );
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
                <label className='components-base-control__label'>hellp</label>
              </div>
            </div>
          </PanelBody>
        </Panel>
      </InspectorControls>,

      <section
        className={`wp-podcasts-305786-block wp-podcasts-305786-episode-player`}
      >
        {!episodeSelected ? searchEpisodes() : showEpisodePlayer()}
      </section>,
    ];
  },

  save(props) {
    return null;
  },
});
