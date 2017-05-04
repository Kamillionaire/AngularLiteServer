
namespace angularLiteServer {
  export class appController{
    public message: string = 'Your data will show up here';
    public position: string;
    public year = 2011;
    public Players: Player[] = [];
    public roster;

    constructor(
        private $http:ng.IHttpService

        ) {

          }

          public loadRoster(year)

          {
            this.$http.get(`/seeds/roster-${year}.json`).then((res)=>{
              this.Players = <Player[]>res.data;
              console.log(<Player[]>res.data);
            }).catch ((e)=>{
              throw new Error (e)
            })
          }
  }
};
