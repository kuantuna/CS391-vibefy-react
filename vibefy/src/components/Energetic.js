import React from 'react'
import './Page.css';
import ReactAudioPlayer from 'react-audio-player';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import ÖmerFarukBostan from '../../src/assets/images/png/ömer faruk bostan.jpg';
import Manga from '../../src/assets/images/png/manga.jpg';
import DuaLipa from '../../src/assets/images/png/dua lipa.jpg';
import Pendulum from '../../src/assets/images/png/pendulum.jpg';

import ErikDali from '../../src/assets/musics/erikdali.mp3';
import WeCouldBeTheSame from '../../src/assets/musics/we could be the same.mp3';
import NewRules from '../../src/assets/musics/NewRules.mp3';
import Witchcraft from '../../src/assets/musics/Witchcraft.mp3';

const cardStyle = {
    padding: '5vh',
    backgroundColor: '#56FF00',
    borderRadius: '20px',
    margin: '5px'
}; 

const background = {
    backgroundColor: '#2E2E2E'
}


function Energetic() {

    return (
        <div className="card-group" style={background}>
            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>Erik Dalı</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Ömer Faruk Bostan</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={ErikDali}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image= {ÖmerFarukBostan}
                        title="Erik Dalı"
                    />
                </Card>
            </div>

            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>Witchcraft</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Pendulum</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={Witchcraft}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image= {Pendulum}
                        title="Witchcraft"
                    />
                </Card>
            </div>

            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>We Could Be The Same</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Manga</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={WeCouldBeTheSame}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image= {Manga}
                        title="We Could Be The Same"
                    />
                </Card>
            </div>

            <div className="col-sm-6">
                <Card className="root" style={cardStyle}>
                    <div className="details">
                        <CardContent className="content">
                            <Typography component="h5" variant="h5">
                            <i>New Rules</i>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <i>Dua Lipa</i>
                            </Typography>
                        </CardContent>
                        <div className="controls">
                        <ReactAudioPlayer src={NewRules}  controls/>  
                        </div>
                    </div>
                    <CardMedia
                        className="cover"
                        image= {DuaLipa}
                        title="New Rules"
                    />
                </Card>
            </div>
        </div>    
    );
}

export default Energetic;