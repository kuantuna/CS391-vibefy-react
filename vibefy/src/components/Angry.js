import React from 'react'
import './Page.css';
import ReactAudioPlayer from 'react-audio-player';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import BillieEilish from '../../src/assets/images/png/billie-eilish.png';
import Ghostemane from '../../src/assets/images/png/ghostemane.png';
import Halsey from '../../src/assets/images/png/halsey.png';
import Şanışer from '../../src/assets/images/png/saniser.png';

import COPYCAT from '../../src/assets/musics/copycat.mp3';
import Mercury from '../../src/assets/musics/mercury.mp3';
import Nightmare from '../../src/assets/musics/nightmare.mp3';
import Susamam from '../../src/assets/musics/susamam.mp3';


const cardStyle = {
    padding: '5vh',
    backgroundColor: '#FF9E9E',
    borderRadius: '20px',
    margin: '5px'
}; 

const background = {
    backgroundColor: '#2E2E2E'
}


function Angry(props) {

    return (
        <div className="card-group" style={background}>
            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>COPYCAT</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Billie Eilish</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={COPYCAT}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image={BillieEilish} 
                        title="COPYCAT"
                    />
                </Card>
            </div>

            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>Mercury</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Ghostemane</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={Mercury}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image={Ghostemane}
                        title="Mercury"
                    />
                </Card>
            </div>

            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>Nightmare</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Halsey</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={Nightmare}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image={Halsey}
                        title="Nightmare"
                    />
                </Card>
            </div>

            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>Susamam</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Şanışer ft. Fuat, Ados...</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={Susamam}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image= {Şanışer}
                        title="Susamam"
                    />
                </Card>
            </div>
        </div>    
    );
}

export default Angry;