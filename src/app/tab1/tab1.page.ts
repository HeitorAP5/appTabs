import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 2,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores Ultimato',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção Científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
    nome: 'Hustle',
    lancamento: '03/06/2022 (BR)',
    duracao: '1h 57m',
    classificacao: 9,
    cartaz: 'https://m.media-amazon.com/images/M/MV5BYjdhYTE3NjMtZjI3OC00NzVlLWFiNTUtNzQ3NDNiNTI3NDg4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg',
    generos: ['Drama', 'Esporte'],
    pagina: '/hustle',
    favorito: false
    },
    {
      nome: 'Missão Impossível - Protocolo Fantasma',
      lancamento: '23/12/2011 (BR)',
      duracao: '2h 13m',
      classificacao: 8,
      cartaz: 'https://m.media-amazon.com/images/I/81-SAlesByL._AC_SL1500_.jpg',
      generos: ['Aventura', 'Ação'],
      pagina: '/missaoimpossivel',
      favorito: false
      },
      {
        nome: 'Gente Grande',
        lancamento: '24/09/2010 (BR)',
        duracao: '1h 42m',
        classificacao: 8,
        cartaz: 'https://upload.wikimedia.org/wikipedia/pt/3/33/Taxi_Driver_%281976_film_poster%29.jpg',
        generos: ['Comédia', 'Buddy'],
        pagina: '/gentegrande',
        favorito: true
        }
      ];
      exibirFilme(filme: IFilme){
        const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
        this.router.navigate(['filme-detalhe'],navigationExtras);
      }

      async exibirAlertaFavorito(filme: IFilme) {
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

