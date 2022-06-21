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
    nome: 'Star Wars ep 9',
    lancamento: '19/12/2019 (BR)',
    duracao: '2h22m',
    classificacao: 4,
    cartaz: 'https://br.web.img3.acsta.net/pictures/19/12/18/16/25/0588210.jpg',
    generos: ['Ficção Científica', 'Drama', 'Ação'],
    pagina: '/star wars',
    favorito: false
    },
    {
      nome: 'Sonic 2',
      lancamento: '07/04/2022 (BR)',
      duracao: '2h02m',
      classificacao: 7,
      cartaz: 'https://br.web.img2.acsta.net/pictures/21/12/08/15/46/3923761.jpg',
      generos: ['Comedia', 'Aventura', 'Ação'],
      pagina: '/sonic 2',
      favorito: false
      },
      {
        nome: 'Taxi driver',
        lancamento: '22/03/1976 (BR)',
        duracao: '1h54m',
        classificacao: 10,
        cartaz: 'https://upload.wikimedia.org/wikipedia/pt/3/33/Taxi_Driver_%281976_film_poster%29.jpg',
        generos: ['Drama', 'Ação', 'Classico'],
        pagina: '/taxi',
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

