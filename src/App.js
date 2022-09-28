import React from "react";
import {Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import "./App.css";

const cards  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]
const App = () => {
    return(
        <>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <PhotoCamera className="icon"/>
                    <Typography variant="h6">Galeri</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className="container">
                    <Container maxWidth="sm" sx={{marginTop:"150px"}}>
                        <Typography
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >Galeri
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Bu bir fotoğraf galerisidir.Bu bir fotoğraf galerisidir.Bu bir fotoğraf galerisidir.Bu bir fotoğraf galerisidir.Bu bir fotoğraf galerisidir.Bu bir fotoğraf galerisidir.
                        </Typography>
                        <div className="buttons">
                            <Grid
                                container
                                spacing={1}
                                justifyContent="center"
                            >
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See Gallery
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Button Two
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container> 
                </div>
                <Container maxWidth="md" className="cardGrid">
                    <Grid 
                        container 
                        spacing={4}>
                        {cards.map(() => (
                            <Grid item xs={12} sm={6} md={4}>
                            <Card className="card">
                                <CardMedia 
                                    className="cardMedia"
                                    image="https://source.unsplash.com/random"
                                    title="Resim Başlığı"
                                />
                            <CardContent className="cardContent">
                                <Typography gutterBottom variant="h5">Resim Başlığı</Typography>
                                <Typography>Bu kısım resim açıklamasıdır.İstediğiniz gibi doldurabilirsiniz.</Typography>
                            </CardContent>  
                            <CardActions>
                                <Button size="sm" color="primary">Görüntüle</Button>
                                <Button size="sm" color="primary">Düzenle</Button>
                            </CardActions>  
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className="footer">
                <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">Bu bir Material UI örneğidir.</Typography>
            </footer>
        </>
    );
}

export default App;