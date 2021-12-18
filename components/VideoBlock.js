import ContentCard from './VideoCard'

export default function VideoBlock() {
    const content = [
        {
            title: "TaehaTypes - How to Lube MX Style Switches",
            url: "https://www.youtube.com/embed/44Wv4OGdmu4"
        },
        {
            title: "HipyoTech - I Upgraded the Most Popular Keyboard on Amazon",
            url: "https://www.youtube.com/embed/CfojrBXu1kM"
        },
        {
            title: ":3ildcat - Vertex Angle Prototype Build",
            url: "https://www.youtube.com/embed/UmiqGHhoczo"
        }
    ];

    return (
        <div className="gallery">
            {content.map((iframe) => (
                <ContentCard title={iframe.title} url={iframe.url} />
            ))}
        </div>
    );
}