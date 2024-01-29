import IVSplayer from "./IVSplayer";

const playbackUrl = 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';

const IVS = () => {

    return (
        <section
            id="IVSplayer"
            className="bg-primary/[.03] pt-24 pb-10 dark:bg-dark-background opacity-95 min-h-[calc(100vh-320px)]"
        >
            <IVSplayer playbackURL={playbackUrl} />
        </section>
    );
}

export default IVS;