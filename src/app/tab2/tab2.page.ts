import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { ISeries } from '../model/ISeries';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}
  listaFilmes: ISeries[] = [
    {
      nome: 'Stranger Things',
      lancamento: '15/07/2016',
      temporadas: '4',
      classificacao: 10,
      cartaz: 'https://akns-images.eonline.com/eol_images/Entire_Site/20201020/rs_634x1024-201120105818-634-stranger_things-netflix-gj.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top',
      generos: ['Ficção Científica', 'Terror', 'Suspense', 'Drama Adolescente'],
      pagina: '/strangerthings',
      favorito: true
    },
    {
      nome: 'Peaky Blinders',
      lancamento: '12/09/2013',
      temporadas: '6',
      classificacao: 9,
      cartaz: 'https://nomoremag.com/wp-content/uploads/2020/09/Peaky-Blinders.jpg',
      generos: ['Ficção histórica', 'Crime', 'Drama'],
      pagina: '/peakyblinders',
      favorito: false
    },
    {
    nome: 'WandaVision',
    lancamento: '15/01/2021',
    temporadas: '1',
    classificacao: 8,
    cartaz: 'https://static.wikia.nocookie.net/disney/images/5/58/WandaVision_-_Novo_P%C3%B4ster_Nacional_-_02.jpg/revision/latest?cb=20210201212810&path-prefix=pt-br',
    generos: ['Ficção Científica', 'Sitcom'],
    pagina: '/wandavision',
    favorito: false
    },
    {
      nome: 'Sex Education',
      lancamento: '11/01/2019',
      temporadas: '3',
      classificacao: 8,
      cartaz: 'https://cdn.fstatic.com/media/movies/covers/2021/06/Sex-Education-Season-3-release-Date-scaled.jpg',
      generos: ['Comédia Dramática', 'Comédia Erótica', 'Drama Adolescente', 'Romance'],
      pagina: '/sexeducation',
      favorito: false
      },
      {
        nome: 'Breaking Bad',
        lancamento: '29/09/2013',
        temporadas: '5',
        classificacao: 9,
        cartaz: 'https://m.media-amazon.com/images/I/81pXWqamdDL._AC_SL1500_.jpg',
        generos: ['Crime'],
        pagina: '/breakingbad',
        favorito: false
        },
  ];
  exibirFilme(filme: ISeries){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(filme: ISeries) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
