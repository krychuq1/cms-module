import axios, { AxiosResponse, AxiosError } from 'axios';

class Cms {
    public projectId: string;
    public url: string;

    public constructor(projectId: string){
        this.projectId = projectId;
        this.url = 'https://translation-backend.sevenamstudio.com/api/content/' + projectId + '/'
    }
    public getContent(type: string, name: string, language: string): Promise<AxiosResponse<object[]> | AxiosError> {
        let url = this.url + type + '/' + name + '/' + language;
        return axios.get <object[]> (url).then((data)=>{
            return data;
        }, (error): AxiosError => {
            return error;
        })
    }

}
// console.log("test");
// const cmsObj = new Cms('5cc969d652f93943b29f8bd2');
// cmsObj.getContent('component', 'header', 'Polish').then((data)=>{
//   console.log(data);
// }, (error): AxiosError => {
//   console.log(error);
// });

export {Cms};
