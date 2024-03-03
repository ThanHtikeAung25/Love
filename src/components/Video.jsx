import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

export function MyVideo() {
    return (
        <MediaPlayer title="Love" src="assets\media\video\lv_0_20240303142001.mp4">
            <MediaProvider>
                <Poster className="vds-poster" src="src\media\icon\yaseen.png"/>
            </MediaProvider>
            <DefaultVideoLayout thumbnails="assets\media\icon\yaseen.png" icons={defaultLayoutIcons} />
        </MediaPlayer>
    );
}
