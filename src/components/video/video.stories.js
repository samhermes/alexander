import './index.js';
import '../../../scss/components/_video.scss';

export default {
    component: 'alexander-video',
    render: ({ video }) => (
        `<alexander-video>
            <video playsinline src="${video}" style="width:100%;height:auto;max-width:600px;"></video>
        </alexander-video>`
    ),
    title: 'Video',
};

export const Default = {
    args: {
        video: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Animation_of_Rotating_Earth_at_Night.webm',
    }
};