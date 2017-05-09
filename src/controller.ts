
namespace angularLiteServer {
  export class appController{
    public message: string = 'Your data will show up here';
    public position: string;
    public years: number[] = [];
    public Players: Player[] = [];
    public playerName;

    // public roster;

    constructor(
        private $http:ng.IHttpService

        ) {for (var i=0; i<52;i++){
            this.years[i] = 1976 + i
          }
          console.log (this.years)
          }

          public loadRoster(year){

            this.$http.get(`/seeds/roster-${year}.json`).then((res)=>{
              this.Players = <Player[]>res.data;
              console.log(<Player[]>res.data);
            }).catch ((e)=>{
              throw new Error (e)
            })
          }
  }
};
