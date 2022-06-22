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
      nome: 'Will Smith',
      lancamento: '25 de setembro de 1968',
      duracao: '1h50m',
      cartaz: 'https://br.web.img2.acsta.net/pictures/17/02/08/16/50/452749.jpg',
      pagina: '/willsmith',
      favorito: false
    },
    {
      nome: 'Joe Keery',
      lancamento: '24 de abril de 1992 ',
      duracao: '3h01m',
      cartaz: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSxE4Jqz79wOrobvL7On3kR64gFeFbWoIRavgfcl0TPYXfBQV9QV3pEtIUNE7Ihymir',
      pagina: '/joekeery',
      favorito: false
    },
    {
    nome: 'Adam Sandler',
    lancamento: '9 de setembro de 1966',
    duracao: '2h22m',
    cartaz: 'https://conteudo.imguol.com.br/c/entretenimento/bc/2017/05/25/adam-sandler-1495763029017_v2_450x600.jpg',
    pagina: '/adamsandler',
    favorito: false
    },
    {
      nome: 'Cillian Murphy',
      lancamento: '25 de maio de 1976',
      duracao: '2h02m',
      cartaz: 'https://br.web.img3.acsta.net/r_1280_720/pictures/17/05/24/16/35/013898.jpg',
      pagina: '/cillianmurphy',
      favorito: false
      },
      {
        nome: 'Aaron Paul',
        lancamento: '27 de agosto de 1979',
        duracao: '1h54m',
        cartaz: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSXTO6jSNsSCMVPEVbcRzMu41ml9L-4QVm7U6wrKS9vCn4GI2_U1ey4CF-f5RnWni4e',
        pagina: '/aaronpaul',
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


