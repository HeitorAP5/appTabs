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
      nome: 'Breking Bad (2021)',
      lancamento: '20/01/2008',
      temporadas: '5',
      classificacao: 10,
      cartaz: 'https://br.web.img3.acsta.net/pictures/14/03/31/19/28/462555.jpg',
      generos: ['Ação', 'Drama', 'Suspense'],
      pagina: '/breking bad',
      favorito: true
    },
    {
      nome: 'The Boys',
      lancamento: '26/07/2019 (BR)',
      temporadas: '3',
      classificacao: 9,
      cartaz: 'https://redacaonline.com.br/blog/wp-content/uploads/2020/10/serie-the-boys-na-redacao.jpg',
      generos: ['Ação', 'Violencia', 'Drama'],
      pagina: '/the boys',
      favorito: false
    },
    {
    nome: 'Mandalorian',
    lancamento: '19/10/2019 (BR)',
    temporadas: '2',
    classificacao: 8,
    cartaz: 'https://images-na.ssl-images-amazon.com/images/I/91tEjUsZusL.jpg',
    generos: ['Ficção Científica', 'Aventura', 'Ação'],
    pagina: '/mandalorian',
    favorito: false
    },
    {
      nome: 'Cavaleiro da Lua',
      lancamento: '30/03/2022 (BR)',
      temporadas: '1',
      classificacao: 7,
      cartaz: 'https://br.web.img3.acsta.net/pictures/22/02/14/19/07/4267879.png',
      generos: ['Terror pscicologico', 'Aventura', 'Ação'],
      pagina: '/moon knight',
      favorito: false
      },
      {
        nome: 'Friends',
        lancamento: '22/09/1999 (BR)',
        temporadas: '2',
        classificacao: 6,
        cartaz: 'https://upload.wikimedia.org/wikipedia/pt/3/33/Taxi_Driver_%281976_film_poster%29.jpg',
        generos: ['Comedia', 'Comedia Cringe', 'Sem graça'],
        pagina: '/friends',
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
