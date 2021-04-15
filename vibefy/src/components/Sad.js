import React from 'react'
import './Page.css';
import ReactAudioPlayer from 'react-audio-player';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import mehmeterdem from '../../src/assets/images/png/mehmet-erdem.jpg';
import Cem_Karaca from '../../src/assets/images/png/Cem_Karaca.jpg';
import muslumgurses from '../../src/assets/images/png/muslumgurses.jpg';
import paul_dwyer from '../../src/assets/images/png/paul_dwyer.jpg';

import herkesaynihayatta from '../../src/assets/musics/herkesaynihayatta.mp3';
import odamkirec from '../../src/assets/musics/odamkirec.mp3';
import nilüfer from '../../src/assets/musics/nilüfer.mp3';
import denizüstüköpürür from '../../src/assets/musics/denizüstüköpürür.mp3';


const cardStyle = {
    padding: '5vh',
    backgroundColor: '#00E2FF',
    borderRadius: '20px',
    margin: '5px'
}; 

const background = {
    backgroundColor: '#2E2E2E'
}

function Sad() {

    return (
        <div className="card-group" style={background}>
            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                                <i>Herkes Aynı Hayatta</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <i>Mehmet Erdem</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={herkesaynihayatta}  controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image={mehmeterdem}
                        title="Herkes Aynı Hayatta"
                    />
                </Card>
            </div>

            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                                <i>Odam Kireç Tutmuyor</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <i>Cem Karaca</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={odamkirec} controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image={Cem_Karaca}
                        title="Odam Kireç Tutmuyor"
                    />
                </Card>
            </div>

            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                                <i>Nilüfer</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <i>Müslüm Gürses</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={nilüfer} controls/>     
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image={muslumgurses}
                        title="Nilüfer"
                    />
                </Card>
            </div>

            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                                <i>Deniz Üstü Köpürür</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <i>Paul Dwyer</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">                                        
                            <ReactAudioPlayer src={denizüstüköpürür}  controls/>                                                                              
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image={paul_dwyer}
                        title="Deniz Üstü Köpürür"
                    />
                </Card>
            </div>
        </div>
    );
}

export default Sad;