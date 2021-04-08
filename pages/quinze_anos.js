import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

const projects = [
    {
        id: 1,
        photo: "/quinze_anos/quinze01.JPG",
        text: "Foto 15 anos - 1",
        width: 6000,
        height: 4000
    },
    {
        id: 2,
        photo: "/quinze_anos/quinze02.JPG",
        text: "Foto 15 anos - 2",
        width: 6000,
        height: 4000
    },
    {
        id: 3,
        photo: "/quinze_anos/quinze03.JPG",
        text: "Foto 15 anos - 3",
        width: 6000,
        height: 4000
    },
    {
        id: 4,
        photo: "/quinze_anos/quinze04.JPG",
        text: "Foto 15 anos - 4",
        width: 3961,
        height: 5941,
    },
    {
        id: 5,
        photo: "/quinze_anos/quinze05.JPG",
        text: "Foto 15 anos - 5",
        width: 3961,
        height: 5941,
    },
    {
        id: 6,
        photo: "/quinze_anos/quinze06.JPG",
        text: "Foto 15 anos - 6",
        width: 3961,
        height: 5941,
    },
    {
        id: 7,
        photo: "/quinze_anos/quinze07.JPG",
        text: "Foto 15 anos - 7",
        width: 6000,
        height: 4000
    },
    {
        id: 8,
        photo: "/quinze_anos/quinze08.JPG",
        text: "Foto 15 anos - 8",
        width: 6000,
        height: 4000
    },
    {
        id: 9,
        photo: "/quinze_anos/quinze09.JPG",
        text: "Foto 15 anos - 9",
        width: 6000,
        height: 4000
    }
];

const options = {
    settings: {
        disablePanzoom: true,
        disableWheelControls: true
    },
    buttons: {
        backgroundColor: 'rgba(30,30,36,0.8)',
        iconColor: 'rgba(255, 255, 255, 0.8)',
        iconPadding: '10px',
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: false,
        showFullscreenButton: false,
        showNextButton: true,
        showPrevButton: true,
        showThumbnailsButton: false,
        size: '40px'
    },
    thumbnails: {
        thumbnailsSize: ["120px", "100px"],
        thumbnailsOpacity: 0.4
    },
    caption: {
        showCaption: false
    }
}

const quinze_anos = () => {
    return (
        <div className="container-full container-fluid">
            <h1 className="h1-events">15 anos</h1>
            <br />
            <SRLWrapper options={options}>
                <div id="content-page-one" className="content">
                    <div className="row">
                        {projects && projects.map(img => (
                            <div className="col-md-4 col-12 col-image-small image-div">

                                {img.width === 6000 ?
                                    <Image
                                        key={img.id}
                                        src={img.photo}
                                        alt={img.text}
                                        className="image"
                                        layout="responsive"
                                        quality={10}
                                        width={6000}
                                        height={4000}
                                    />
                                    :
                                    <Image
                                        key={img.id}
                                        src={img.photo}
                                        alt={img.text}
                                        className="image"
                                        layout="responsive"
                                        quality={10}
                                        width={3961}
                                        height={5941}
                                    />}
                            </div>
                        ))}
                    </div>
                </div>
            </SRLWrapper>
        </div>
    )
}

export default quinze_anos;