<?php

// Replace the feed with your itunes RSS feed to parse
$rssfeed = 'https://media.rss.com/rollingwith1s/feed.xml';
$rss = simplexml_load_file($rssfeed);

foreach ($rss->channel->item as $item) {
    $namespace = $item->getNameSpaces(true);
    $itunes = $item->children($namespace['itunes']);



    if (isset($item->enclosure)) {
        $url = $item->enclosure['url'];
        $title        = $item->title;
        $size        = $item->enclosure['length'];
        $desc       = $item->description;


        $time         = $itunes->duration;
        $parsed     = date_parse($time);
        $duration     = $parsed['hour'] * 3600 + $parsed['minute'] * 60 + $parsed['second'];

        echo '
            
            <div style="display:flex">
                <div>
                    <img src="' . $itunes->image->attributes()->href . '"/>
                </div>
                <div>
                <h1>' .  $title     . '</h1>
                <p>' .  $desc     . '</p>
                </div>
            </div>

            
            ';
    }
}; 