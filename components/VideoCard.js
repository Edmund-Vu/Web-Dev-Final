export default function VideoCard({title, url}) {
    return (
        <div className="card">
            <div className="card-wrapper">
                <iframe width="560" height="315" src={url} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p><a href={url}>{title}</a></p>
            </div>
        </div>
    );
}