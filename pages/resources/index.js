import Image from 'next/image'

const Resources = () => {

    const myLoader = ({src, width, quality}) => {
        return 'https://examplecom/${src}?w=${width}&q=${quality || 75}'
    }
    return (
        <div>
            <h1>Resources</h1>
            <h2>Layouts</h2>
            <p><a href="https://www.keychron.com/blogs/news/keyboard-size-layout-buying-guide">Keychron's Layout Guide</a></p>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/GxS30X_unjU"} title={"layouts"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p></p>
            <h2>Switches</h2>
            <Image
                loader={myLoader}
                src="https://m.media-amazon.com/images/I/71Xs8YgS-cL._AC_SL1500_.jpg"
                alt="Switches"
                width={500}
                height={500}
            />
            <p><a href="https://dygma.com/blogs/stories/the-ultimate-guide-to-mechanical-keyboard-switches-for-2020">Switch Guide</a></p>
        </div>
    );
}

export default Resources;