import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaFilmes: IAtores[] = [
    {
      nome: 'Tom Hanks ',
      lancamento: '9 de julho de 1956',
      duracao: '1h50m',
      cartaz: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg',
      pagina: '/Tom Hanks',
      favorito: false
    },
    {
      nome: 'Robert De Niro',
      lancamento: '17 de agosto de 1943 ',
      duracao: '3h01m',
      cartaz: 'https://br.web.img3.acsta.net/c_310_420/pictures/15/09/16/17/30/201281.jpg',
      pagina: '/Robert De Niro',
      favorito: false
    },
    {
    nome: 'Robert Pattinson',
    lancamento: '13 de maio de 1986',
    duracao: '2h22m',
    cartaz: 'https://br.web.img3.acsta.net/pictures/19/03/20/16/05/1007568.jpg',
    pagina: '/Robert Pattinson',
    favorito: false
    },
    {
      nome: 'Arnold Schwarzenegger',
      lancamento: '30 de julho de 1947',
      duracao: '2h02m',
      cartaz: 'https://www.opovo.com.br/_midias/jpg/vasti/2013/01-06/03/20130306/diversas/20130306_arnold_schwarzenegger__ator.jpg',
      pagina: '/Arnold Schwarzenegger',
      favorito: false
      },
      {
        nome: 'Chris Evans',
        lancamento: '13 de junho de 1981',
        duracao: '1h54m',
        cartaz: 'https://epipoca.com.br/wp-content/uploads/2021/08/chris-evans-0308.jpg',
        pagina: '/Chris Evans',
        favorito: true
        }
      ];
      exibirFilme(filme: IAtores){
        const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
        this.router.navigate(['filme-detalhe'],navigationExtras);
      }

      async exibirAlertaFavorito(filme: IAtores) {
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


