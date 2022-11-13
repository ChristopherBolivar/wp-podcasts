const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import apiFetch from '@wordpress/api-fetch';


registerBlockType("wp-podcasts-305786/episodes", {
  title: __("Episodes Archive", "wp-podcasts-305786"),
  icon: 'format-video',
  category: "wp-podcasts-305786",
  attributes: {
    episodes: {
      type: "array",
    }
},  styles: [
  {
      name: 'stacked',
      label: __( 'Stacked', "wp-podcasts-305786" ),
      isDefault: true
  },
  {
      name: 'split',
      label: __( 'Split', "wp-podcasts-305786" )
  },

],

  edit: (props) => {

    // Pulling Set Attributes and Block Attributes from props
    const {
      attributes: {
        episodes
      },
      className,
      setAttributes,
    } = props;

    console.log(episodes)

    apiFetch( { path: '/wp/v2/wp-podcasts-305786' } ).then( posts => {
        return posts
    } ).then( ( res ) => {
        
        setAttributes( { episodes: res } )
    } );
  
    
    let showEpisodes = () =>{
      
        
      if(episodes){
        return episodes.map((topic,i)=>{
              return (
              <div className={`${className} wp-podcasts-305786-episodes-wrapper`}>
                <div className='wp-podcasts-305786-episode-thumbnail'>
                  <img src={topic.podcast_data.wp_podcasts_305786_thumbnail}/>
                </div>
                <div className="wp-podcasts-305786-episode-info">
                  <div className="wp-podcasts-305786-episode-info-inner">
                  <h1 className='wp-podcasts-305786-episode-title'>{topic.title.rendered}</h1> 
                  <p className='wp-podcasts-305786-episode-subtitle'>{topic.podcast_data.wp_podcasts_305786_subtitle}</p>
                  <p className='wp-podcasts-305786-episode-episode-duration'><span className="wp-podcasts-305786-episode-episode-duration-span">Duration:</span> {topic.podcast_data.wp_podcasts_305786_duration}</p>
                  <a href="" className="wp-podcasts-305786-episode-info-btn"><button className='wp-block-button wp-element-button'>More info</button></a>
                  </div>
                </div>
              </div>
              )
            
        })
    }
      
    }

    return (
      <div className={` wp-podcasts-305786-block wp-podcasts-305786-episodes`} >
      
            {showEpisodes()}
       
      </div>
    );
  },
  
  save(props) {
    return null;
  }
});
